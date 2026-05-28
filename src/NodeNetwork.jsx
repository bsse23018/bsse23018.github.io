import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { AdditiveBlending, MathUtils } from "three";

const NODE_COUNT = 700;
const BOUNDS = 14;
const DRIFT_SPEED = 0.18;

const palette = [
  [0.2, 0.95, 1.0],
  [0.15, 0.7, 1.0],
  [0.3, 0.9, 0.75],
  [0.55, 0.45, 0.95],
];

export default function NodeNetwork() {
  const groupRef = useRef(null);
  const pointsRef = useRef(null);

  const { positions, colors, velocities } = useMemo(() => {
    const positions = new Float32Array(NODE_COUNT * 3);
    const colors = new Float32Array(NODE_COUNT * 3);
    const velocities = new Float32Array(NODE_COUNT * 3);

    for (let i = 0; i < NODE_COUNT; i += 1) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * BOUNDS * 2;
      positions[i3 + 1] = (Math.random() - 0.5) * BOUNDS * 2;
      positions[i3 + 2] = (Math.random() - 0.5) * BOUNDS * 1.6;

      const color = palette[Math.floor(Math.random() * palette.length)];
      const variance = Math.random() * 0.18;
      colors[i3] = Math.min(1, color[0] + variance);
      colors[i3 + 1] = Math.min(1, color[1] + variance);
      colors[i3 + 2] = Math.min(1, color[2] + variance);

      velocities[i3] = (Math.random() - 0.5) * DRIFT_SPEED;
      velocities[i3 + 1] = (Math.random() - 0.5) * DRIFT_SPEED;
      velocities[i3 + 2] = (Math.random() - 0.5) * DRIFT_SPEED * 0.6;
    }

    return { positions, colors, velocities };
  }, []);

  useFrame((state, delta) => {
    const points = pointsRef.current;
    if (!points) return;

    const positionsArray = points.geometry.attributes.position.array;
    for (let i = 0; i < NODE_COUNT; i += 1) {
      const i3 = i * 3;
      positionsArray[i3] += velocities[i3] * delta;
      positionsArray[i3 + 1] += velocities[i3 + 1] * delta;
      positionsArray[i3 + 2] += velocities[i3 + 2] * delta;

      if (positionsArray[i3] > BOUNDS) positionsArray[i3] = -BOUNDS;
      if (positionsArray[i3] < -BOUNDS) positionsArray[i3] = BOUNDS;
      if (positionsArray[i3 + 1] > BOUNDS) positionsArray[i3 + 1] = -BOUNDS;
      if (positionsArray[i3 + 1] < -BOUNDS) positionsArray[i3 + 1] = BOUNDS;
      if (positionsArray[i3 + 2] > BOUNDS) positionsArray[i3 + 2] = -BOUNDS;
      if (positionsArray[i3 + 2] < -BOUNDS) positionsArray[i3 + 2] = BOUNDS;
    }

    points.geometry.attributes.position.needsUpdate = true;

    const group = groupRef.current;
    if (!group) return;

    const targetX = state.mouse.y * 0.18;
    const targetY = state.mouse.x * 0.25;
    group.rotation.x = MathUtils.lerp(group.rotation.x, targetX, 0.05);
    group.rotation.y = MathUtils.lerp(group.rotation.y, targetY, 0.05);
    group.position.x = MathUtils.lerp(group.position.x, state.mouse.x * 0.6, 0.05);
    group.position.y = MathUtils.lerp(group.position.y, state.mouse.y * 0.4, 0.05);
  });

  return (
    <group ref={groupRef}>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            array={positions}
            count={positions.length / 3}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            array={colors}
            count={colors.length / 3}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.05}
          sizeAttenuation
          transparent
          opacity={0.9}
          blending={AdditiveBlending}
          depthWrite={false}
          vertexColors
        />
      </points>
    </group>
  );
}
