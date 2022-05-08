import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Earth } from "./components/Cities";
import { Sun, Moon } from "./components/Celestial";
import "./index.scss";

const App = () => {
  return (
    <Canvas>
      <OrbitControls />
      <Sun />
      <Earth />
      <Moon />
    </Canvas>
  );
};

export default App;
