"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, Sparkles, PerspectiveCamera, MeshTransmissionMaterial, Lightformer, Float, ContactShadows } from "@react-three/drei";
import { EffectComposer, Bloom, DepthOfField, Vignette, Noise } from "@react-three/postprocessing";
import { useRef } from "react";
import * as THREE from "three";

// --- Foreground Elements ---

function WoodenTable() {
  return (
    <group position={[3, -1.5, 2]}>
      {/* Table Top */}
      <mesh receiveShadow castShadow>
        <cylinderGeometry args={[4, 4, 0.2, 64]} />
        <meshPhysicalMaterial 
          color="#3c2a21" 
          roughness={0.7} 
          metalness={0.1}
          clearcoat={0.1}
        />
      </mesh>
    </group>
  );
}

function CoffeeSetup() {
  const group = useRef<THREE.Group>(null);

  return (
    <group ref={group} position={[2.5, -1.3, 2.5]} rotation={[0, -Math.PI / 4, 0]}>
      {/* Plate */}
      <mesh receiveShadow castShadow position={[0, 0.05, 0]}>
        <cylinderGeometry args={[0.8, 0.6, 0.05, 32]} />
        <meshPhysicalMaterial color="#f5f0e6" roughness={0.2} metalness={0.1} />
      </mesh>
      
      {/* Cup */}
      <mesh castShadow receiveShadow position={[0, 0.4, 0]}>
        <cylinderGeometry args={[0.5, 0.4, 0.7, 32]} />
        <meshPhysicalMaterial color="#1f1612" roughness={0.1} metalness={0.8} clearcoat={1} />
      </mesh>

      {/* Coffee Liquid */}
      <mesh position={[0, 0.72, 0]}>
        <cylinderGeometry args={[0.48, 0.48, 0.02, 32]} />
        <meshPhysicalMaterial color="#0a0705" roughness={0.1} metalness={0.9} />
      </mesh>

      {/* Steam */}
      <Sparkles
        position={[0, 1.2, 0]}
        count={30}
        scale={[0.5, 1.5, 0.5]}
        size={6}
        speed={0.2}
        opacity={0.4}
        color="#e0b08b"
      />
      
      {/* Abstract Croissant (Torus) */}
      <mesh castShadow receiveShadow position={[-1.2, 0.15, 0.2]} rotation={[Math.PI/2, Math.PI/4, 0]} scale={[1, 0.5, 1]}>
        <torusGeometry args={[0.3, 0.15, 16, 32]} />
        <meshPhysicalMaterial color="#c28d65" roughness={0.8} />
      </mesh>
    </group>
  );
}

function EspressoMachine() {
  return (
    <group position={[6, -0.5, -1]} rotation={[0, -Math.PI/6, 0]}>
      {/* Machine Body */}
      <mesh castShadow receiveShadow position={[0, 0, 0]}>
        <boxGeometry args={[2, 2, 1.5]} />
        <meshPhysicalMaterial color="#070605" roughness={0.3} metalness={0.8} clearcoat={0.5} />
      </mesh>
      {/* Metallic Details */}
      <mesh castShadow receiveShadow position={[-0.8, 0.2, 0.8]}>
        <cylinderGeometry args={[0.1, 0.1, 0.4, 16]} />
        <meshPhysicalMaterial color="#c99852" roughness={0.2} metalness={1} />
      </mesh>
      <mesh castShadow receiveShadow position={[-0.4, 0.2, 0.8]}>
        <cylinderGeometry args={[0.1, 0.1, 0.4, 16]} />
        <meshPhysicalMaterial color="#c99852" roughness={0.2} metalness={1} />
      </mesh>
    </group>
  );
}

// --- Background Elements ---

function RainyWindow() {
  return (
    <group position={[0, 0, -10]}>
      {/* Glass Pane */}
      <mesh position={[0, 2, 0]}>
        <planeGeometry args={[30, 15]} />
        <MeshTransmissionMaterial 
          background={new THREE.Color("#070605")}
          transmission={0.9} 
          thickness={0.5} 
          roughness={0.4}
          ior={1.5}
          chromaticAberration={0.05}
        />
      </mesh>
      
      {/* Neon Sign behind glass */}
      <Float speed={2} rotationIntensity={0.1} floatIntensity={0.1}>
        <mesh position={[-5, 3, -2]}>
          <boxGeometry args={[4, 1, 0.1]} />
          <meshBasicMaterial color="#db6a14" toneMapped={false} />
          <pointLight color="#db6a14" intensity={5} distance={10} />
        </mesh>
      </Float>

      {/* Abstract silhouettes moving behind window */}
      <Float speed={0.5} floatIntensity={0} position={[-2, 1, -1]}>
         <mesh>
           <capsuleGeometry args={[0.5, 2, 8, 16]} />
           <meshBasicMaterial color="#000000" opacity={0.8} transparent />
         </mesh>
      </Float>

      {/* Simulated Rain Drops on Glass */}
      <Sparkles
        position={[0, 2, 0.1]}
        count={200}
        scale={[30, 15, 0.1]}
        size={1.5}
        speed={0}
        opacity={0.3}
        color="#ffffff"
      />
    </group>
  );
}

function AtmosphericDust() {
  return (
    <>
      <Sparkles
        count={300}
        scale={[20, 10, 15]}
        size={2}
        speed={0.1}
        opacity={0.15}
        color="#c99852"
      />
      {/* Fog to simulate steam and volumetric density */}
      <fog attach="fog" args={["#070605", 5, 25]} />
    </>
  );
}

function CinematicLighting() {
  return (
    <>
      <ambientLight intensity={0.1} color="#3c2a21" />
      
      {/* Key Light (Warm Tungsten) */}
      <spotLight
        position={[8, 10, 5]}
        angle={0.6}
        penumbra={0.8}
        intensity={8}
        color="#db6a14"
        castShadow
        shadow-bias={-0.0001}
        shadow-mapSize={[2048, 2048]}
      />

      {/* Fill Light (Cooler exterior) */}
      <spotLight
        position={[-10, 5, -5]}
        angle={0.8}
        penumbra={1}
        intensity={2}
        color="#4a5d7c"
      />

      {/* Rim Light for depth */}
      <pointLight position={[0, 2, -5]} intensity={3} color="#c99852" distance={15} />

      <Environment preset="night" environmentIntensity={0.2}>
        <Lightformer form="rect" intensity={2} color="#db6a14" position={[5, 5, -2]} scale={[10, 2, 1]} />
      </Environment>
    </>
  );
}

function CameraRig() {
  const { camera, mouse } = useThree();
  const vec = new THREE.Vector3();

  return useFrame(() => {
    // Parallax effect, slightly offset to the left since content is on the left
    camera.position.lerp(vec.set(mouse.x * 1.5, mouse.y * 0.8 + 2, 8), 0.05);
    camera.lookAt(2, 0, 0); // Look towards the 3D scene on the right
  });
}

export function CafeScene() {
  return (
    <div className="w-full h-[100svh] absolute inset-0 z-0 pointer-events-none bg-black-matte">
      <Canvas shadows dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 2, 8]} fov={35} />
        
        <CinematicLighting />
        <AtmosphericDust />
        
        {/* Depth Layers */}
        <RainyWindow />           {/* Background */}
        <EspressoMachine />       {/* Midground */}
        <WoodenTable />           {/* Foreground Base */}
        <CoffeeSetup />           {/* Foreground Detail */}
        
        <ContactShadows position={[3, -1.49, 2]} opacity={0.5} scale={10} blur={2} far={2} />

        <CameraRig />

        <EffectComposer multisampling={4}>
          {/* Subtle Bloom for the neon sign and highlights */}
          <Bloom luminanceThreshold={1.2} mipmapBlur intensity={1.5} />
          {/* Depth of Field to blur background and very close foreground */}
          <DepthOfField target={[2.5, -1.3, 2.5]} focalLength={0.03} bokehScale={4} height={700} />
          {/* Cinematic Vignette & Noise */}
          <Vignette eskil={false} offset={0.2} darkness={1.3} />
          <Noise opacity={0.03} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
