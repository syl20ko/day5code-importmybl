import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls, Sky } from "@react-three/drei";
import Farm from "./Farmthreejs";
import Boy from "./Boy";
import "./App.css";

function App() {
  return (
    <Canvas camera={{ position: [-30, 5, 10], fov: 90 }}>
      <ambientLight />
      <directionalLight intensity={1} />
      <ambientLight intensity={0.2} />
      <Suspense fallback={null}>
        <Boy position={[-15, -5, 0]} animation={true} />
        <Farm position={[-5, 0, 0]} />
        <Sky
          distance={450000} // Camera distance (default=450000)
          sunPosition={[0, 1, 0]} // Sun position normal (defaults to inclination and azimuth if not set)
          inclination={0} // Sun elevation angle from 0 to 1 (default=0)
          azimuth={0.25} // Sun rotation around the Y axis from 0 to 1 (default=0.25)
        />
      </Suspense>
      <OrbitControls maxPolarAngle={Math.PI / 2} minPolarAngle={0} />
    </Canvas>
  );
}

export default App;
