import { SCENE_INTERACTIONS } from './types';

export function toggleGrid() {
	return {
		type: SCENE_INTERACTIONS.TOGGLE_GRID
	}
}

export function toggleZoom() {
	return {
		type: SCENE_INTERACTIONS.TOGGLE_ZOOM,
	}
}

export function toggleFurnished() {
	return {
		type: SCENE_INTERACTIONS.TOGGLE_FURNISHED,
	}
}

export function setSelectedMesh(selectedMesh: number) {
	return {
		type: SCENE_INTERACTIONS.SET_SELECTED_MESH,
		payload: { selectedMesh }
	}
}

export function setTarget(target: [number,number,number]) {
	return {
		type: SCENE_INTERACTIONS.SET_TARGET,
		payload: { target }
	}
}
