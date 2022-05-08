import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useHelper } from "@react-three/drei";
import { PointLightHelper } from "three";

const Moon = () => {
  const moonRef: any = useRef();
  const radius = 3;

  useFrame(({ clock }) => {
    moonRef.current.position.x = -Math.cos(clock.elapsedTime) * radius;
    moonRef.current.position.y = -Math.sin(clock.elapsedTime) * radius;
  });

  useHelper(moonRef, PointLightHelper, 0.5, 0xc2c5cc);
  return <pointLight ref={moonRef} intensity={0.5} color={0xc2c5cc} />;
};

export default Moon;
