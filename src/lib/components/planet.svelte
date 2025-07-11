<script lang="ts">
	import { T } from '@threlte/core';
	import { onMount } from 'svelte';
	import { useTexture, OrbitControls, HTML } from '@threlte/extras';
	import * as THREE from 'three';
	import Card from '$lib/components/card.svelte';
	import { isPlanetReady } from '$lib/dataset/stores';

	export let earthMap: string;
	export let normalMap: string;
	export let specularMap: string;
	export let coordinates: { territoryName: string; lat: number; lon: number }[];
	export let countriesData;
	let globeGeometry: THREE.Object3D[] = [];

	let camera: THREE.PerspectiveCamera;
	let globe: THREE.Mesh;

	let sphereYPosition = -0.5;
	let globeRadius = 3;

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
			return t;
		}
	});

	const normalMapTexture = useTexture(normalMap, {
		transform: (t) => {
			t.anisotropy = 16;
			return t;
		}
	});

	const specularMapTexture = useTexture(specularMap, {
		transform: (t) => {
			t.anisotropy = 16;
			return t;
		}
	});

	const texturesPromise = Promise.all([surfaceTexture, normalMapTexture, specularMapTexture]);

	onMount(() => {
		surfaceTexture.then((t) => {
			t.colorSpace = THREE.NoColorSpace;
		});
		normalMapTexture.then((t) => {
			t.colorSpace = THREE.NoColorSpace;
		});

		specularMapTexture.then((t) => {
			t.colorSpace = THREE.NoColorSpace;
		});

		texturesPromise.then(() => {
			setTimeout(() => {
				isPlanetReady.set(true);
				const markers: HTMLElement[] = Array.from(document.querySelectorAll('.markers'));
				markers.forEach((m, i) => {
					m.style.transitionDelay = `${i * 0.1}s`;
					m.style.transform = 'scale(1)';
					m.style.opacity = '1';
				});
			}, 200);
			console.log('texturesPromise', $isPlanetReady);
		});
	});
</script>

<div class="canvas-container">
	<T.PerspectiveCamera
		makeDefault
		position={[0, 0, 8]}
		fov={60}
		aspect={16 / 9}
		near={0.1}
		far={50}
		bindthis={(el: any) => (camera = el)}
		rotation={[0, 1, 0]}
	>
		<OrbitControls
			enablePan={false}
			enableZoom={false}
			enableDamping={true}
			dampingFactor={0.1}
			autoRotate={true}
			autoRotateSpeed={0.3}
			rotateSpeed={0.3}
			zoomToCursor={false}
			zoomSpeed={1}
			minPolarAngle={0}
			maxPolarAngle={Math.PI}
		/>
	</T.PerspectiveCamera>

	<T.AmbientLight intensity={0.4} />
	<T.DirectionalLight position={[5, 5, 5]} intensity={0.8} />
	<T.DirectionalLight position={[-5, -5, -5]} intensity={0.3} />

	{#await texturesPromise then [earthMap, normalMap, specularMap]}
		<T.Mesh
			bindthis={(el: any) => {
				globe = el;
			}}
			position={[0, sphereYPosition, 0]}
			rotation={[0, 0, 0]}
		>
			<T.SphereGeometry args={[globeRadius, 32, 32]} bindthis={(el: any) => (globeGeometry = el)} />
			<T.MeshStandardMaterial
				map={earthMap}
				roughnessMap={specularMap}
				metalnessMap={specularMap}
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
			>
				<Card
					countryData={countriesData.find((c: any) => c.CountryName === m.territoryName)}
					isSmall={true}
				/>
			</HTML>
		{/each}
	{/await}
</div>

<style>
	:global(.markers) {
		transform: scale(0);
		opacity: 1;
		transition: all 1.5s cubic-bezier(0.165, 0.84, 0.44, 1);
	}

	.canvas-container {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 1;
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
