import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';

const Guitar = () => {
  const guitar = useGLTF('./gibson_sg_guitar/scene.gltf')

  return (
    <mesh>
      <hemisphereLight intensity={.15} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight position={[10, 0, 10]} angle={90} penumbra={1} intensity={1} castShadow shadow-mapSize={1024}/>
      <primitive object={guitar.scene} position={[0, -1, 0]} rotation={[0,0.5,0]} scale={2} />
    </mesh>
  )
}

const GuitarCanvas = () => {
  return (
    <Canvas frameloop='demand' shadows camera={{ position: [0, 0, 10], fov: 25 }} gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={null}>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <Guitar />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default GuitarCanvas;