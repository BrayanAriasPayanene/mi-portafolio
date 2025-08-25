// src/components/ParticlesBackground.jsx
import React from "react";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

export default function ParticlesBackground() {
  return (
    <Canvas
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -0, // fondo detrás de todo
        pointerEvents: "none" // no bloquea interacción
      }}
    >
      <Stars
        radius={100}  // tamaño del "universo"
        depth={50}    // profundidad de estrellas
        count={10000}  // cantidad de estrellas
        factor={6}    // tamaño de estrellas
        saturation={0}
        fade
        speed={5}     // velocidad de rotación automática
      />
    </Canvas>
  );
}
