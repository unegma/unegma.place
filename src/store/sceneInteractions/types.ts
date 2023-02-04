export interface ISceneInteractions {
  zoomOn: boolean;
  furnished: boolean;
  gridOn: boolean;
  error: string;
  helperText: string;
  target: [number, number, number];
  roomCount: number;
  selectedMesh: number;
  roomNameArray: [];
}

export enum SCENE_INTERACTIONS {
  TOGGLE_GRID = 'TOGGLE_GRID',
  TOGGLE_FURNISHED = 'TOGGLE_FURNISHED',
  TOGGLE_ZOOM = 'TOGGLE_ZOOM',
  SET_SELECTED_MESH = 'SET_SELECTED_MESH',
  SET_TARGET = 'SET_TARGET',
  SET_ROOM_COUNT = 'SET_ROOM_COUNT',
  SET_ROOM_NAME_ARRAY = 'SET_ROOM_NAME_ARRAY',
  ERROR = 'ERROR',
}
