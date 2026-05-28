import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { AdditiveBlending, MathUtils } from "three";

const RINGS = [
  { radius: 1.6, count: 140, tilt: 0.35, color: "#36e3ff" },
  { radius: 2.2, count: 180, tilt: -0.4, color: "#1fb4ff" },
  { radius: 2.9, count: 220, tilt: 0.2, color: "#23f0c7" },
];

export default function DataCore() {
  const groupRef = useRef(null);
  const coreRef = useRef(null);
  const wireRef = useRef(null);
  const ringRefs = useRef([]);

  const ringData = useMemo(
    () =>
      RINGS.map((ring) => {
        const positions = new Float32Array(ring.count * 3);
        for (let i = 0; i < ring.count; i += 1) {
          const angle = (i / ring.count) * Math.PI * 2;
          const jitter = (Math.random() - 0.5) * 0.12;
          positions[i * 3] = Math.cos(angle) * ring.radius + jitter;
          positions[i * 3 + 1] = (Math.random() - 0.5) * 0.12;
          positions[i * 3 + 2] = Math.sin(angle) * ring.radius + jitter;
        }
        return { ...ring, positions };
      }),
    []
  );

  useFrame((state, delta) => {
    const group = groupRef.current;
    if (!group) return;

    const targetX = state.mouse.y * 0.18;
    const targetY = state.mouse.x * 0.28;
    group.rotation.x = MathUtils.lerp(group.rotation.x, targetX, 0.06);
    group.rotation.y = MathUtils.lerp(group.rotation.y, targetY, 0.06);
    group.position.x = MathUtils.lerp(group.position.x, 2.4 + state.mouse.x * 0.35, 0.06);
    group.position.y = MathUtils.lerp(group.position.y, state.mouse.y * 0.25, 0.06);

    if (coreRef.current) {
      coreRef.current.rotation.y += delta * 0.25;
      coreRef.current.rotation.x += delta * 0.18;
    }
    if (wireRef.current) {
      wireRef.current.rotation.y -= delta * 0.3;
      wireRef.current.rotation.x -= delta * 0.2;
    }

    ringRefs.current.forEach((ring, index) => {
      if (!ring) return;
      ring.rotation.z += delta * (0.18 + index * 0.05);
      ring.rotation.y += delta * (0.12 + index * 0.04);
    });
  });

  return (
    <group ref={groupRef} position={[2.4, 0, 0]}>
      <mesh ref={coreRef}>
        <icosahedronGeometry args={[1.05, 1]} />
        <meshStandardMaterial
          color="#0ea5e9"
          emissive="#22d3ee"
          emissiveIntensity={1.4}
          metalness={0.1}
          roughness={0.2}
        />
      </mesh>
      <mesh ref={wireRef} scale={1.25}>
        <icosahedronGeometry args={[1.1, 0]} />
        <meshBasicMaterial
          color="#60e6ff"
          transparent
          opacity={0.45}
          blending={AdditiveBlending}
          wireframe
        />
      </mesh>
      {ringData.map((ring, index) => (
        <group
          key={`ring-${ring.radius}`}
          ref={(el) => {
            ringRefs.current[index] = el;
          }}
          rotation={[ring.tilt, 0, 0]}
        >
          <points>
            <bufferGeometry>
              <bufferAttribute
                attach="attributes-position"
                array={ring.positions}
                count={ring.positions.length / 3}
                itemSize={3}
              />
            </bufferGeometry>
            <pointsMaterial
              size={0.045}
              sizeAttenuation
              transparent
              opacity={0.9}
              depthWrite={false}
              blending={AdditiveBlending}
              color={ring.color}
            />
          </points>
        </group>
      ))}
      <mesh scale={1.6}>
        <sphereGeometry args={[1.1, 24, 24]} />
        <meshBasicMaterial
          color="#22d3ee"
          transparent
          opacity={0.08}
          blending={AdditiveBlending}
        />
      </mesh>
    </group>
  );
}
