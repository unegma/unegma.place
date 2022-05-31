import {useLoader} from "@react-three/fiber";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import {DRACOLoader} from 'three/examples/jsm/loaders/DRACOLoader';
const DECODER_PATH="https://www.gstatic.com/draco/versioned/decoders/1.4.1/";

const spaceURL = 'https://assets.unegma.net/relicsof.earth/cafe.gltf'; // todo may need draco loader https://assets.unegma.net/ark.unegma.work/cafe.gltf

/**
 * From this example:
 * @constructor
 */
export default function Space() {
  const { nodes, materials }: any = useLoader(GLTFLoader, spaceURL, loader => {
    const useDraco = true;
    if (useDraco) {
      const dracoLoader = new DRACOLoader();
      dracoLoader.setDecoderConfig({type: 'js'});
      dracoLoader.setDecoderPath(DECODER_PATH);
      console.log(dracoLoader)
      // @ts-ignore
      loader.setDRACOLoader(dracoLoader);
    }
  });
  console.log(nodes,materials);

  return (
    <mesh material={materials.material_0} geometry={nodes.mesh_0.geometry} />
  )
}
