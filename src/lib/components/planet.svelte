<script>
	import { Canvas, T } from '@threlte/core';
	import { onMount } from 'svelte';
	import * as THREE from 'three';
	import { EARTH_CONFIG } from '../config.js';

	/** @type {THREE.Mesh | undefined} */
	let sphere;
	/** @type {THREE.Texture | undefined} */
	let earthTexture;
	/** @type {number | undefined} */
	let animationId;

	onMount(() => {
		const loader = new THREE.TextureLoader();

		earthTexture = loader.load(EARTH_CONFIG.textureUrl);
		earthTexture.wrapS = THREE.RepeatWrapping;
		earthTexture.wrapT = THREE.RepeatWrapping;

		function animate() {
			if (sphere) {
				sphere.rotation.y += EARTH_CONFIG.rotationSpeed;
			}
			animationId = requestAnimationFrame(animate);
		}
		animate();

		return () => {
			if (animationId) {
				cancelAnimationFrame(animationId);
			}
		};
	});
</script>

<div class="planet-wrapper">
	<Canvas>
		<T.PerspectiveCamera makeDefault position={[0, 0, 5]} fov={EARTH_CONFIG.cameraFov} />

		<T.AmbientLight intensity={EARTH_CONFIG.ambientLightIntensity} />
		<T.DirectionalLight position={[10, 10, 5]} intensity={EARTH_CONFIG.directionalLightIntensity} />

		<T.Mesh bind:ref={sphere} position={[0, 0, 0]}>
			<T.SphereGeometry
				args={[EARTH_CONFIG.radius, EARTH_CONFIG.segments, EARTH_CONFIG.segments]}
			/>
			<T.MeshBasicMaterial
				map={earthTexture}
				color={EARTH_CONFIG.material.color}
				opacity={EARTH_CONFIG.material.opacity}
				transparent={EARTH_CONFIG.material.transparent}
				wireframe={EARTH_CONFIG.material.wireframe}
			/>
		</T.Mesh>
	</Canvas>
</div>

<style>
	.planet-wrapper {
		width: 100%;
		height: 100vh;
		position: fixed;
		bottom: -70%;
		left: 50%;
		transform: translateX(-50%) scale(2);
		z-index: -1;
	}

	:global(.planet-wrapper canvas) {
		width: 100%;
		height: 100vh;
		pointer-events: none;
	}
</style>
