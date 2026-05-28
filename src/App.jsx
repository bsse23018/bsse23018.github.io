import { Canvas } from "@react-three/fiber";
import DataCore from "./DataCore.jsx";
import Content from "./Content.jsx";

export default function App() {
  return (
    <div className="relative w-screen overflow-x-hidden bg-slate-950 text-white">
      <div className="pointer-events-none fixed inset-0 h-screen w-screen">
        <Canvas
          className="absolute inset-0"
          dpr={[1, 2]}
          camera={{ position: [0, 0, 5], fov: 50 }}
          gl={{ antialias: true, powerPreference: "high-performance" }}
        >
          <color attach="background" args={["#05070f"]} />
          <fog attach="fog" args={["#05070f", 8, 24]} />
          <ambientLight intensity={0.4} />
          <directionalLight position={[6, 4, 4]} intensity={0.6} />
          <DataCore />
        </Canvas>

        
      </div>

      <div className="pointer-events-none relative z-30">
        <Content />
      </div>
    </div>
  );
}
