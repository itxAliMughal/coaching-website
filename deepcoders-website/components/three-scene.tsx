"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Text, OrbitControls } from "@react-three/drei"
import type * as THREE from "three"

function FloatingCode() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.2
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.5
    }
  })

  return (
    <group ref={meshRef} position={[0, -2, 0]}>
      <Text
        position={[0, 0, 0]}
        fontSize={1.5}
        color="#22c55e"
        anchorX="center"
        anchorY="middle"
        font="/fonts/Geist-Bold.ttf"
      >
        {"MERN Stack"}
      </Text>
    </group>
  )
}

function BackgroundText() {
  const textRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (textRef.current) {
      textRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.1) * 0.1
    }
  })

  const positions = [
    [-8, 4, -5],
    [8, 2, -5],
    [-6, -2, -5],
    [6, -4, -5],
    [-10, 0, -8],
    [10, -1, -8],
    [0, 6, -8],
    [0, -6, -8],
    [-4, 8, -10],
    [4, -8, -10],
    [-12, -3, -10],
    [12, 3, -10],
  ]

  return (
    <group ref={textRef}>
      {positions.map((pos, index) => (
        <Text
          key={index}
          position={pos as [number, number, number]}
          fontSize={0.8}
          color="#22c55e"
          anchorX="center"
          anchorY="middle"
          font="/fonts/Geist-Regular.ttf"
          opacity={0.1 + (index % 3) * 0.1}
        >
          MERN Stack
        </Text>
      ))}
    </group>
  )
}

function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null)

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.1
    }
  })

  const particlesPosition = new Float32Array(200 * 3)
  for (let i = 0; i < 200; i++) {
    particlesPosition[i * 3] = (Math.random() - 0.5) * 20
    particlesPosition[i * 3 + 1] = (Math.random() - 0.5) * 20
    particlesPosition[i * 3 + 2] = (Math.random() - 0.5) * 20
  }

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={200} array={particlesPosition} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial color="#22c55e" size={0.05} transparent opacity={0.6} />
    </points>
  )
}

export default function ThreeScene() {
  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} color="#22c55e" intensity={1} />

      <FloatingCode />
      <BackgroundText />
      <ParticleField />

      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
    </Canvas>
  )
}
