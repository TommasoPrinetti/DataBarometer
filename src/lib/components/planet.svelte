<script lang="ts">
	import { T } from '@threlte/core';
	import { onMount } from 'svelte';
	import { useTexture, OrbitControls, HTML } from '@threlte/extras';
	import * as THREE from 'three';
	import Card from '$lib/components/card.svelte';
	import { isPlanetReady } from '$lib/stores.js';
	import { interactivity } from '@threlte/extras';

	export let earthMap: string;
	export let normalMap: string;
	export let specularMap: string;
	export let coordinates: { territoryName: string; lat: number; lon: number }[];
	export let countriesData;
	let globeGeometry: THREE.Object3D[] = [];

	let camera: THREE.PerspectiveCamera;
	let globe: THREE.Mesh;

	let sphereYPosition = -0.5;
	let globeRadius = 4.5;
	let loadFlag = false;

	function latLongToCartesian(
		lat: number,
		lon: number,
		radius = globeRadius
	): [number, number, number] {
		const phi = (90 - lat) * (Math.PI / 180);
		const theta = (lon + 180) * (Math.PI / 180);
		const x = -radius * Math.sin(phi) * Math.cos(theta);
		const y = radius * Math.cos(phi) + sphereYPosition;
		const z = radius * Math.sin(phi) * Math.sin(theta);
		return [x, y, z];
	}

	function getMarkerPosition(lat: number, lon: number): [number, number, number] {
		const basePosition = latLongToCartesian(lat, lon);
		const offsetFactor = 1.01; // Push markers 15% outward from sphere surface
		return [
			basePosition[0] * offsetFactor,
			basePosition[1] + sphereYPosition * (offsetFactor - 1),
			basePosition[2] * offsetFactor
		];
	}

	type Marker = { territoryName: string; position: [number, number, number] };

	let markers: Marker[] = [];

	$: markers = (coordinates ?? []).map((c) => ({
		territoryName: c.territoryName,
		position: getMarkerPosition(c.lat, c.lon)
	}));

	const surfaceTexture = useTexture(earthMap, {
		transform: (t) => {
			t.anisotropy = 16;
			t.colorSpace = THREE.NoColorSpace;
			t.wrapS = THREE.RepeatWrapping;
			t.wrapT = THREE.RepeatWrapping;
			return t;
		}
	});

	const normalMapTexture = useTexture(normalMap, {
		transform: (t) => {
			t.anisotropy = 16;
			t.colorSpace = THREE.NoColorSpace;
			return t;
		}
	});

	const specularMapTexture = useTexture(specularMap, {
		transform: (t) => {
			t.anisotropy = 16;
			t.colorSpace = THREE.NoColorSpace;
			return t;
		}
	});

	let cards: HTMLElement[] = [];

	const texturesPromise = Promise.all([surfaceTexture, normalMapTexture, specularMapTexture]);

	onMount(() => {
		texturesPromise.then(() => {
			setTimeout(() => {
				isPlanetReady.set(true);

				cards = Array.from(document.querySelectorAll('.markers'));

				cards.forEach((c, i) => {
					c.style.transitionDelay = `${i * 0.1 + 0.5}s`;
					c.classList.add('show');
				});

				setTimeout(() => {
					loadFlag = true;
				}, 1000);
			}, 200);
		});

		setTimeout(() => {
			if (camera) {
				camera.rotation.set(Math.PI / 100, Math.PI / 4, Math.PI / 12);
			}
		}, 1000);

		interactivity();
	});
</script>

<div class="canvas-container">
	{#await texturesPromise then [earthMap, normalMap, specularMap]}
		<T.PerspectiveCamera
			makeDefault
			position={[3, -5, 10]}
			rotation={[Math.PI / 100, Math.PI / 4, Math.PI / 12]}
			fov={60}
			aspect={16 / 9}
			near={0.1}
			far={50}
			bindthis={(el: any) => (camera = el)}
			lookat={[0, 0, 0]}
		>
			<OrbitControls
				enablePan={false}
				enableZoom={false}
				enableDamping={true}
				dampingFactor={0.1}
				autoRotate={true}
				autoRotateSpeed={0.1}
				rotateSpeed={0.3}
				zoomToCursor={false}
				zoomSpeed={1}
				minPolarAngle={0}
				maxPolarAngle={Math.PI}
				enableRotate={false}
			/>
		</T.PerspectiveCamera>

		<T.AmbientLight intensity={5} color={0xffffff} />
		<T.Mesh
			bindthis={(el: any) => {
				globe = el;
			}}
			position={[0, sphereYPosition, 0]}
			rotation={[0, 0, 0]}
		>
			<T.SphereGeometry args={[globeRadius, 64, 64]} bindthis={(el: any) => (globeGeometry = el)} />
			<T.MeshStandardMaterial
				map={earthMap}
				roughnessMap={specularMap}
				{normalMap}
				normalScale={[0.3, 0.3]}
			/>
		</T.Mesh>
		{#each markers as m, i (m.territoryName)}
			<HTML
				as="div"
				class="markers"
				position={[m.position[0], m.position[1], m.position[2]]}
				center={true}
				distanceFactor={1.1}
				occlude="raycast"
				transform={true}
				zIndexRange={[0, 1000]}
				castShadow={true}
				pointer-events={true}
			>
				<Card
					countryData={countriesData.find((c: any) => c.CountryName === m.territoryName)}
					isSmall={true}
					index={i}
				/>
			</HTML>
		{/each}
	{/await}
</div>

<style>
	:global(.markers) {
		transform: scale(1);
		opacity: 1;
		transition:
			transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1),
			opacity 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
		pointer-events: auto;
		z-index: 10;
	}

	.canvas-container {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 1;
		pointer-events: auto;
	}

	:global(canvas) {
		width: 100% !important;
		height: 100% !important;
		max-width: 100%;
		object-fit: contain;
	}

	:global(button) {
		width: fit-content;
		height: fit-content;
		bottom: black;
	}
</style>
