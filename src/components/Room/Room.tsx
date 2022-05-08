import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF as GLTFThree } from "three/examples/jsm/loaders/GLTFLoader";
import { Material, Mesh } from "three";
declare module "three-stdlib" {
  export interface GLTF extends GLTFThree {
    nodes: Record<string, Mesh>;
    materials: Record<string, Material>;
  }
}

const Room = (props: any) => {
  const group = useRef();
  const { nodes, materials } = useGLTF("room.gltf");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={nodes.Plane.material}
        scale={4}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001.geometry}
        material={nodes.Plane001.material}
        position={[-2.99, 1.18, 0.19]}
        scale={[1, 1, 2.16]}
      />
    </group>
  );
};

useGLTF.preload("/room.gltf");

export default Room;
