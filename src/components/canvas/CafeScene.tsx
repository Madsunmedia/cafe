"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, Float, Sparkles, PerspectiveCamera, MeshTransmissionMaterial } from "@react-three/drei";
import { EffectComposer, Bloom, DepthOfField, Vignette } from "@react-three/postprocessing";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function CoffeeCup() {
  const group = useRef<THREE.Group>(null);

  // Floating animation
  useFrame((state) => {
    if (group.current) {
      group.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1 - 0.5;
      group.current.rotation.y += 0.005;
    }
  });

  return (
    <group ref={group}>
      {/* Cup Body */}
      <mesh position={[0, 0, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.8, 0.6, 1.5, 32]} />
        <meshStandardMaterial color="#fdfbf7" roughness={0.1} metalness={0.1} />
      </mesh>
      
      {/* Coffee inside */}
      <mesh position={[0, 0.7, 0]}>
        <cylinderGeometry args={[0.75, 0.75, 0.05, 32]} />
        <meshStandardMaterial color="#2c1e16" roughness={0.4} metalness={0.8} />
      </mesh>

      {/* Cup Handle */}
      <mesh position={[0.8, 0, 0]} rotation={[0, 0, -Math.PI / 2]} castShadow>
        <torusGeometry args={[0.4, 0.1, 16, 32, Math.PI]} />
        <meshStandardMaterial color="#fdfbf7" roughness={0.1} metalness={0.1} />
      </mesh>

      {/* Plate */}
      <mesh position={[0, -0.8, 0]} receiveShadow>
        <cylinderGeometry args={[1.5, 1.2, 0.1, 32]} />
        <meshStandardMaterial color="#fdfbf7" roughness={0.2} metalness={0.1} />
      </mesh>

      {/* Steam Particles */}
      <Sparkles
        position={[0, 1.5, 0]}
        count={50}
        scale={[1.5, 2, 1.5]}
        size={4}
        speed={0.4}
        opacity={0.5}
        color="#eaddcf"
        noise={1}
      />
    </group>
  );
}

function AmbientDust() {
  return (
    <Sparkles
      count={200}
      scale={[20, 10, 20]}
      size={2}
      speed={0.2}
      opacity={0.2}
      color="#e67e22"
    />
  );
}

function Rig() {
  const { camera, mouse } = useThree();
  const vec = new THREE.Vector3();

  return useFrame(() => {
    camera.position.lerp(vec.set(mouse.x * 2, mouse.y * 1 + 2, 8), 0.05);
    camera.lookAt(0, 0, 0);
  });
}

export function CafeScene() {
  return (
    <div className="w-full h-screen absolute inset-0 -z-10 pointer-events-none">
      <Canvas shadows dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 2, 8]} fov={45} />
        <color attach="background" args={["#0a0a0a"]} />
        <fog attach="fog" args={["#0a0a0a", 5, 20]} />

        {/* Lighting */}
        <ambientLight intensity={0.2} />
        <spotLight
          position={[5, 10, 5]}
          angle={0.5}
          penumbra={1}
          intensity={2}
          color="#e67e22"
          castShadow
          shadow-bias={-0.0001}
        />
        <spotLight
          position={[-5, 5, -5]}
          angle={0.8}
          penumbra={1}
          intensity={1}
          color="#b5835a"
        />

        <CoffeeCup />
        <AmbientDust />
        
        {/* Parallax rig */}
        <Rig />

        <Environment preset="city" />

        {/* Post-processing */}
        <EffectComposer>
          <Bloom luminanceThreshold={1} mipmapBlur intensity={1.5} />
          <DepthOfField target={[0, 0, 0]} focalLength={0.02} bokehScale={2} height={480} />
          <Vignette eskil={false} offset={0.1} darkness={1.1} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
