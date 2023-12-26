import {
  Environment,
  OrbitControls,
  OrthographicCamera,
  PerspectiveCamera,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
function App() {

 

  return (
    <>
      <Canvas>
      <PerspectiveCamera makeDefault position={[0, 120,100]} fov={100} />
        <Experience />
        <OrbitControls />
        <ambientLight intensity={1} />
        <Environment preset="sunset" />
      </Canvas>
    </>
  );
}

export default App;
