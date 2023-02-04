export interface ISceneInteractions {
  zoomOn: boolean;
  furnished: boolean;
  gridOn: boolean;
  error: string;
  helperText: string;
  target: [number, number, number];
  selectedMesh: number;
}

export enum SCENE_INTERACTIONS {
  TOGGLE_GRID = 'TOGGLE_GRID',
  TOGGLE_FURNISHED = 'TOGGLE_FURNISHED',
  TOGGLE_ZOOM = 'TOGGLE_ZOOM',
  SET_SELECTED_MESH = 'SET_SELECTED_MESH',
  SET_TARGET = 'SET_TARGET',
  ERROR = 'ERROR',
}
