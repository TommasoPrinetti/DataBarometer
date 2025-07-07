import earthTexture from '$lib/assets/earth-texture-hd.jpg';
import normalMap from '$lib/assets/NormalMap.png';

export const EARTH_CONFIG = {
	textureUrl: earthTexture,
	normalMapUrl: normalMap,
	rotationSpeed: 0.002,
	radius: 2.5,
	segments: 64,
	ambientLightIntensity: 0.4,
	directionalLightIntensity: 1.5,
	cameraPosition: [0, 0, 5],
	cameraFov: 75,
	material: {
		color: '#000000',
		opacity: 1.0,
		transparent: false,
		wireframe: false,
		wireframeLinewidth: 1,
		side: 'FrontSide',
		blending: 'NormalBlending',
		depthTest: true,
		depthWrite: true,
		alphaTest: 0,
		fog: true,
		vertexColors: false,
		reflectivity: 1,
		refractionRatio: 0.98,
		combine: 'MultiplyOperation',
		flatShading: false,
		polygonOffset: false,
		polygonOffsetFactor: 0,
		polygonOffsetUnits: 0
	}
};
