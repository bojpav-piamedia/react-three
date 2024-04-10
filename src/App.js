import { useRef, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment, Box } from "@react-three/drei";

import { Model } from "./Model";

import './App.css';
import { fromHalfFloat } from "three/src/extras/DataUtils.js";

// function Box(props) {
//   // This reference gives us direct access to the THREE.Mesh object
//   const ref = useRef()
//   // Hold state for hovered and clicked events
//   const [hovered, hover] = useState(false)
//   const [clicked, click] = useState(false)
//   // Subscribe this component to the render-loop, rotate the mesh every frame
//   useFrame((state, delta) => (ref.current.rotation.x += delta))
//   // Return the view, these are regular Threejs elements expressed in JSX
//   return (
//     <mesh
//       {...props}
//       ref={ref}
//       scale={clicked ? 1.5 : 1}
//       onClick={(event) => click(!clicked)}
//       onPointerOver={(event) => (event.stopPropagation(), hover(true))}
//       onPointerOut={(event) => hover(false)}>
//       <boxGeometry args={[1, 1, 1]} />
//       <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
//     </mesh>
//   )
// }

// function App() {
//   return (
//     <Canvas>
//       <Model position={[0, 0, 0]} />
//     </Canvas>
//   )
// }

// export default App;

/* environment presets */

// apartment: 'lebombo_1k.hdr',
// city: 'potsdamer_platz_1k.hdr',
// dawn: 'kiara_1_dawn_1k.hdr',
// forest: 'forest_slope_1k.hdr',
// lobby: 'st_fagans_interior_1k.hdr',
// night: 'dikhololo_night_1k.hdr',
// park: 'rooitou_park_1k.hdr',
// studio: 'studio_small_03_1k.hdr',
// sunset: 'venice_sunset_1k.hdr',
// warehouse: 'empty_warehouse_01_1k.hdr',

export default function App() {
  return (
    <div className="App">
      <Canvas>
      <mesh>
        <ambientLight intensity={Math.PI / 2} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          decay={0}
          intensity={Math.PI}
        />
        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
        <OrbitControls />
        <Suspense fallback={null}>
          <Model position={[0, 0, 0]} />
          <Environment preset="park" background />
        </Suspense>
        </mesh>
      </Canvas>
    </div>
  );
}

// export default function App() {
//   return (
//     <Canvas>
//       <ambientLight intensity={Math.PI / 2} />
//       <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
//       <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
//       <Box position={[-1.2, 0, 0]} />
//       <Box position={[1.2, 0, 0]} />
//       <OrbitControls />
//     </Canvas>
//   )
// }
