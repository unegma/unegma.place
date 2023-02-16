import { useGlobalStore } from '../store';

import bindActions from '../store/bindActions';
import sceneInteractionsReducer from '../store/sceneInteractions';

const { actions } = sceneInteractionsReducer;

/**
 * useItems Custom Hook
 */
const useSceneInteractions: any = () => {
  console.log(useGlobalStore())

  const { state, dispatch } = useGlobalStore();

  // List of Props
  const { sceneInteractions } = state;

  // List of Actions
  const {
    toggleFurnished,
    toggleWaterWorks,
    toggleGrid,
    toggleZoom,
    setSelectedMesh,
    setTarget,
    setRoomCount,
    setRoomNameArray,
    toggleFirstPerson
  } = actions;

  // Bind Actions
  const sceneInteractionsActions = bindActions({
    toggleFurnished,
    toggleWaterWorks,
    toggleGrid,
    toggleZoom,
    setSelectedMesh,
    setTarget,
    setRoomCount,
    setRoomNameArray,
    toggleFirstPerson
  }, dispatch);

  return { ...sceneInteractions, ...sceneInteractionsActions };
}

export default useSceneInteractions;
