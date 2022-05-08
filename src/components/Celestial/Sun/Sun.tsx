import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useHelper } from "@react-three/drei";
import { PointLightHelper } from "three";

const Sun = () => {
  const sunRef: any = useRef();
  const radius = 15;

  useFrame(({ clock }) => {
    sunRef.current.position.x = Math.cos(clock.elapsedTime) * radius;
    sunRef.current.position.y = Math.sin(clock.elapsedTime) * radius;
  });

  useHelper(sunRef, PointLightHelper, 0.5, 0xff8400);
  return <pointLight ref={sunRef} intensity={1} color={0xff8400} />;
};

export default Sun;
