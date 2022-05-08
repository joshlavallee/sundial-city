import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Earth } from "./components/Cities";
import { Sun, Moon } from "./components/Celestial";
import { Room } from "./components/Room";
import "./index.scss";

const App = () => {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <OrbitControls />
        <ambientLight intensity={0.1} />
        <Room position={[0, -2, 0]} rotation={[0, -1.5, 0]} scale={2} />
        <Sun />
        <Earth />
        <Moon />
      </Suspense>
    </Canvas>
  );
};

export default App;
