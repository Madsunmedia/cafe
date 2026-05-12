"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, Sparkles, PerspectiveCamera, MeshTransmissionMaterial, Lightformer, Float, ContactShadows } from "@react-three/drei";
import { EffectComposer, Bloom, Vignette, Noise } from "@react-three/postprocessing";
import { useRef, useMemo } from "react";
import * as THREE from "three";

// --- Realistic Pouring Components ---

function PouringLiquid() {
  const streamRef = useRef<THREE.Mesh>(null);
  const rippleRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (streamRef.current) {
      // Subtle wobble and scale for stream
      streamRef.current.rotation.y = Math.sin(time * 5) * 0.02;
    }
    if (rippleRef.current) {
      rippleRef.current.scale.setScalar(1 + Math.sin(time * 3) * 0.05);
      const mat = rippleRef.current.material as THREE.MeshPhysicalMaterial;
      mat.opacity = 0.5 + Math.sin(time * 3) * 0.2;
    }
  });

  return (
    <group position={[0, 0.7, 0]}>
      {/* Liquid Stream */}
      <mesh ref={streamRef} position={[0.2, 0.4, 0]} rotation={[0, 0, -0.2]}>
        <cylinderGeometry args={[0.02, 0.015, 1, 16]} />
        <meshPhysicalMaterial 
          color="#db6a14" 
          emissive="#543a28" 
          emissiveIntensity={0.5}
          roughness={0.1} 
          metalness={0.8}
          transparent
          opacity={0.9}
        />
      </mesh>
      
      {/* Swirling Ripple / Latte Art Base */}
      <mesh ref={rippleRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.05, 0]}>
        <circleGeometry args={[0.45, 32]} />
        <meshPhysicalMaterial 
          color="#f5f0e6" 
          roughness={0.2}
          transparent
          opacity={0.8}
          emissive="#c99852"
          emissiveIntensity={0.2}
        />
      </mesh>
    </group>
  );
}

function CoffeeCup() {
  return (
    <group position={[2.5, -1.3, 2.5]} rotation={[0, -Math.PI / 4, 0]}>
      {/* Saucer */}
      <mesh receiveShadow castShadow position={[0, 0.05, 0]}>
        <cylinderGeometry args={[0.9, 0.7, 0.06, 64]} />
        <meshPhysicalMaterial color="#070605" roughness={0.2} metalness={0.8} clearcoat={1} />
      </mesh>
      
      {/* Cup Body */}
      <mesh castShadow receiveShadow position={[0, 0.45, 0]}>
        <cylinderGeometry args={[0.55, 0.45, 0.8, 64]} />
        <meshPhysicalMaterial 
          color="#070605" 
          roughness={0.1} 
          metalness={0.9} 
          clearcoat={1}
          reflectivity={1}
        />
      </mesh>

      {/* Coffee Surface */}
      <mesh position={[0, 0.75, 0]}>
        <cylinderGeometry args={[0.5, 0.5, 0.02, 64]} />
        <meshPhysicalMaterial 
          color="#1a110a" 
          roughness={0.05} 
          metalness={0.5}
          emissive="#2d1f19"
        />
      </mesh>
      
      <PouringLiquid />

      {/* Steam */}
      <Sparkles
        position={[0, 1.2, 0]}
        count={20}
        scale={[0.6, 2, 0.6]}
        size={3}
        speed={0.3}
        opacity={0.2}
        color="#e0b08b"
      />
    </group>
  );
}

function MetalJug() {
  const jugRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (jugRef.current) {
      // Tilting motion
      jugRef.current.rotation.z = -Math.PI / 5 + Math.sin(time) * 0.05;
      jugRef.current.position.y = 1.2 + Math.sin(time * 0.5) * 0.05;
    }
  });

  return (
    <group ref={jugRef} position={[3.2, 0.8, 2.5]}>
      <mesh castShadow rotation={[0, 0, Math.PI / 6]}>
        <cylinderGeometry args={[0.3, 0.35, 0.8, 32]} />
        <meshPhysicalMaterial color="#e5e5e5" metalness={1} roughness={0.1} clearcoat={1} />
      </mesh>
      {/* Spout */}
      <mesh position={[-0.2, 0.3, 0]} rotation={[0, 0, Math.PI / 3]}>
        <coneGeometry args={[0.1, 0.3, 16]} />
        <meshPhysicalMaterial color="#cccccc" metalness={1} roughness={0.1} />
      </mesh>
    </group>
  );
}

// --- Atmosphere & Lighting ---

function CinematicLighting() {
  return (
    <>
      <ambientLight intensity={0.2} color="#3c2a21" />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        intensity={15}
        color="#db6a14"
        castShadow
        shadow-bias={-0.0001}
      />
      <pointLight position={[-5, 5, 5]} intensity={2} color="#4a5d7c" />
      <Environment preset="night" environmentIntensity={0.5} />
    </>
  );
}

function CameraRig() {
  const { camera, mouse } = useThree();
  const vec = new THREE.Vector3();

  return useFrame((state) => {
    const time = state.clock.getElapsedTime();
    // Subtle drift + mouse parallax
    const driftX = Math.sin(time * 0.5) * 0.2;
    const driftY = Math.cos(time * 0.5) * 0.1;
    camera.position.lerp(vec.set(mouse.x * 0.8 + driftX, mouse.y * 0.4 + driftY + 2, 7), 0.02);
    camera.lookAt(2, 0.5, 0);
  });
}

export function CafeScene() {
  return (
    <div className="w-full h-[100svh] absolute inset-0 z-0 pointer-events-none bg-black-matte">
      <Canvas shadows dpr={1} gl={{ antialias: true, alpha: false }}>
        <PerspectiveCamera makeDefault position={[0, 2, 7]} fov={35} />
        
        <CinematicLighting />
        
        {/* Floating Coffee Beans / Particles */}
        <Sparkles
          count={60}
          scale={[15, 10, 10]}
          size={1.5}
          speed={0.2}
          opacity={0.15}
          color="#c99852"
        />
        
        {/* Scene Elements */}
        <CoffeeCup />
        <MetalJug />
        
        {/* Table Base */}
        <mesh receiveShadow position={[3, -1.5, 2]}>
          <cylinderGeometry args={[5, 5, 0.2, 64]} />
          <meshPhysicalMaterial color="#1a110a" roughness={0.8} />
        </mesh>

        <ContactShadows position={[2.5, -1.49, 2.5]} opacity={0.6} scale={5} blur={2} far={1} />

        <CameraRig />

        <EffectComposer multisampling={0}>
          <Bloom luminanceThreshold={1} mipmapBlur intensity={0.5} />
          <Vignette eskil={false} offset={0.3} darkness={1.1} />
          <Noise opacity={0.02} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
