import { ISceneInteractions, SCENE_INTERACTIONS } from './types';

const INITIAL_HELPER_TEXT = "↺ or ⇉ Model";

export const initialState: ISceneInteractions = {
  zoomOn: false,
  gridOn: false,
  furnished: false,
  helperText: INITIAL_HELPER_TEXT,
  selectedMesh: 0,
  target: [0,0,0],
  error: ''
}

export default function sceneInteractions(state = initialState, action: any) {
  switch (action.type) {
    case SCENE_INTERACTIONS.SET_SELECTED_MESH:
      return {
        ...state,
        error: '',
        selectedMesh: action.payload.selectedMesh
      };
    case SCENE_INTERACTIONS.SET_TARGET:
      return {
        ...state,
        error: '',
        target: action.payload.target
      };
    case SCENE_INTERACTIONS.TOGGLE_FURNISHED:
      return {
        ...state,
        error: '',
        furnished: !state.furnished
      };
    case SCENE_INTERACTIONS.TOGGLE_GRID:
      return {
        ...state,
        error: '',
        gridOn: !state.gridOn,
        helperText: !state.gridOn ? '1 Square is approx 1m²': INITIAL_HELPER_TEXT  // todo check this switches back
      };
    // todo might want to: alert('Zoom Enabled\n\nPLEASE BE AWARE\n\nThis model is a reduced quality scan\nThis will be more noticeable when zooming!')
    case SCENE_INTERACTIONS.TOGGLE_ZOOM:
      return {
        ...state,
        error: '',
        zoomOn: !state.zoomOn,
        helperText: !state.zoomOn ? `⚲ or ${INITIAL_HELPER_TEXT}` : INITIAL_HELPER_TEXT // todo check this switches back
      };
    default: {
      return state;
    }
  }
}
