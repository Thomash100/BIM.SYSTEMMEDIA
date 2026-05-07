import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { Suspense, useMemo, useRef } from 'react';
import * as THREE from 'three';

function BuildingFrame() {
  const group = useRef<THREE.Group>(null);
  const floors = useMemo(() => Array.from({ length: 7 }, (_, i) => i), []);
  const pointPositions = useMemo(() => {
    const values: number[] = [];
    for (let i = 0; i < 90; i += 1) {
      const angle = i * 1.618;
      const radius = 1.6 + ((i % 9) * 0.18);
      values.push(Math.cos(angle) * radius, ((i % 30) - 15) * 0.1, Math.sin(angle) * radius * 0.72);
    }
    return new Float32Array(values);
  }, []);

  useFrame(({ clock }) => {
    if (!group.current) return;
    group.current.rotation.y = Math.sin(clock.elapsedTime * 0.22) * 0.24;
    group.current.rotation.x = -0.18 + Math.sin(clock.elapsedTime * 0.16) * 0.04;
  });

  return (
    <group ref={group}>
      {floors.map((floor) => (
        <lineSegments key={floor} position={[0, floor * 0.34 - 1, 0]}>
          <edgesGeometry args={[new THREE.BoxGeometry(2.9, 0.08, 1.8)]} />
          <lineBasicMaterial color={floor % 2 ? '#41e9ff' : '#8fb5d8'} transparent opacity={0.75} />
        </lineSegments>
      ))}
      {[-1.45, 1.45].map((x) =>
        [-0.9, 0.9].map((z) => (
          <mesh key={`${x}-${z}`} position={[x, 0, z]}>
            <boxGeometry args={[0.035, 2.2, 0.035]} />
            <meshBasicMaterial color="#41e9ff" transparent opacity={0.5} />
          </mesh>
        )),
      )}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[pointPositions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial color="#41e9ff" size={0.025} transparent opacity={0.85} />
      </points>
    </group>
  );
}

function LogoCube({ scale = 1, compact = false }: { scale?: number; compact?: boolean }) {
  const cube = useRef<THREE.Mesh>(null);
  const logoTexture = useLoader(THREE.TextureLoader, '/logo-systemmedia-v.png');

  useFrame(({ clock }) => {
    if (!cube.current) return;
    const t = clock.elapsedTime;
    cube.current.rotation.x = t * 0.35 + Math.sin(t * 0.7) * 0.18;
    cube.current.rotation.y = t * 0.48 + Math.cos(t * 0.41) * 0.22;
    cube.current.rotation.z = Math.sin(t * 0.53) * 0.12;
    cube.current.position.y = Math.sin(t * 0.9) * (compact ? 0.11 : 0.18);
    cube.current.position.x = Math.sin(t * 0.37) * (compact ? 0.07 : 0.16);
  });

  return (
    <mesh ref={cube} castShadow position={[0, 0, 0]} scale={scale}>
      <boxGeometry args={[1.85, 1.85, 1.85]} />
      {Array.from({ length: 6 }).map((_, index) => (
        <meshStandardMaterial
          key={index}
          attach={`material-${index}`}
          map={logoTexture}
          roughness={0.36}
          metalness={0.18}
          emissive="#041827"
          emissiveIntensity={0.16}
        />
      ))}
    </mesh>
  );
}

type Hero3DProps = {
  compact?: boolean;
};

export default function Hero3D({ compact = false }: Hero3DProps) {
  return (
    <div
      className={`hero-visual relative overflow-hidden rounded-lg border border-white/10 bg-panel/50 shadow-glow ${
        compact ? 'h-[min(78vw,560px)] max-h-[62vh] min-h-[340px] md:h-[560px]' : 'h-[360px] md:h-[560px]'
      }`}
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,185,236,0.38)_0%,rgba(13,77,122,0.3)_35%,rgba(5,7,13,0.92)_82%),radial-gradient(circle_at_50%_22%,rgba(65,233,255,0.24),transparent_34%)]" />
      <div className="skyline skyline-back" />
      <div className="skyline skyline-front" />
      <Canvas
        className="!absolute !inset-0 !h-full !w-full"
        camera={{ position: [0, compact ? 0.18 : 0.55, compact ? 5.55 : 5.9], fov: compact ? 40 : 42 }}
        dpr={[1, 1.5]}
        shadows
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.45} />
          <directionalLight position={[3, 4, 4]} intensity={2.2} castShadow shadow-mapSize={[1024, 1024]} />
          <pointLight position={[-2, 1.5, 3]} intensity={1.1} color="#41e9ff" />
          <LogoCube scale={compact ? 0.98 : 1} compact={compact} />
          {!compact ? (
            <group position={[0, -1.15, -0.7]} scale={0.62}>
              <BuildingFrame />
            </group>
          ) : null}
          <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.42, 0]}>
            <circleGeometry args={[2.2, 64]} />
            <shadowMaterial transparent opacity={0.36} />
          </mesh>
        </Suspense>
      </Canvas>
      <div className="pointer-events-none absolute inset-6 border border-cyan/20" />
      {!compact ? (
        <div className="pointer-events-none absolute bottom-5 left-5 right-5 grid grid-cols-3 gap-3 text-[10px] uppercase tracking-[0.24em] text-cyan/80">
          <span>IFC Class</span>
          <span>Revit Level</span>
          <span>MQTT Data</span>
        </div>
      ) : null}
    </div>
  );
}
