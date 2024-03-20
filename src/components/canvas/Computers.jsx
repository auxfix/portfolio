import React, {Suspense, useEffect, useState, useRef} from 'react'

import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { SpotLightHelper, MeshPhongMaterial  } from 'three'

import CanvasLoader from "../Loader";


const Computers = () => {
  const computer = useGLTF('./desktop_pc/scene.gltf')

  return (
    <mesh>
        <hemisphereLight intensity={1.15}
          groundColor="black" />
        <directionalLight
          position={[-10, 50, 10]} 
          intensity={1.5} 
          castShadow 
          shadow-mapSize={[1024, 1024]}
        />
        <pointLight intensity={1.25} /> 
        <primitive
          object={computer.scene}
          scale={0.75}
          position={[0, -3.25, -1.5]}
          rotation={[0, -0.2, -0.1]}
          material={new MeshPhongMaterial({ color: 0xffffff, shininess: 100 })}
        />
    </mesh>
  )
}

const ComputersCanvas = () => {
  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true}}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        /> 
        <Computers />
      </Suspense>
      <Preload all />
    </Canvas>
  )
};

export default ComputersCanvas;