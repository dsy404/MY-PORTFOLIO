import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export const Hero3DCanvas: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isInteracting, setIsInteracting] = useState(false);
  const [activeNodeName, setActiveNodeName] = useState<string | null>("Neural Hub");

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Scene, Camera, Renderer
    const width = currentMount.clientWidth || 500;
    const height = currentMount.clientHeight || 500;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 24;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      currentMount.appendChild(renderer.domElement);
    } catch {
      // Fallback if WebGL isn't supported
      return;
    }

    // Group for all rotating objects
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. Geodesic Icosahedron Wireframe (Deep Navy on Light Canvas)
    const innerGeometry = new THREE.IcosahedronGeometry(6.2, 2);
    const innerWireframe = new THREE.WireframeGeometry(innerGeometry);
    const innerLineMaterial = new THREE.LineBasicMaterial({
      color: 0x1e3a8a, // Deep Navy Blue
      transparent: true,
      opacity: 0.45,
    });
    const innerLines = new THREE.LineSegments(innerWireframe, innerLineMaterial);
    mainGroup.add(innerLines);

    // 2. Inner Core Glowing Geometry
    const coreGeo = new THREE.OctahedronGeometry(2.8, 1);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0x2563eb, // Cobalt/Royal Blue
      wireframe: true,
      transparent: true,
      opacity: 0.75,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    mainGroup.add(coreMesh);

    // 3. Orbiting Neural Particle Cloud (Pastel & Navy high-dimension mix)
    const particleCount = 320;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const colorNavy = new THREE.Color(0x1e3a8a); // Navy Anchor
    const colorPastelSky = new THREE.Color(0x38bdf8); // Pastel Sky Cyan
    const colorPastelLavender = new THREE.Color(0x818cf8); // Pastel Lavender
    const colorPastelMint = new THREE.Color(0x34d399); // Pastel Mint
    const colorPastelRose = new THREE.Color(0xf472b6); // Pastel Rose

    for (let i = 0; i < particleCount; i++) {
      const radius = 7.5 + Math.random() * 3.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      const rChoice = Math.random();
      const c = rChoice > 0.7 
        ? colorNavy 
        : rChoice > 0.45 
        ? colorPastelSky 
        : rChoice > 0.25 
        ? colorPastelLavender 
        : rChoice > 0.1 
        ? colorPastelMint 
        : colorPastelRose;

      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.34,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
    });
    const particleCloud = new THREE.Points(particleGeo, particleMat);
    mainGroup.add(particleCloud);

    // 4. Tech Nodes orbiting in rings with pastel node hues
    const techLabels = ["AI/ML", "Python", "Full-Stack", "SQL", "Open Source", "Docker", "n8n"];
    const nodesGroup = new THREE.Group();
    mainGroup.add(nodesGroup);

    const nodeObjects: { mesh: THREE.Mesh; name: string; angle: number; radius: number; speed: number; yOffset: number }[] = [];
    const pastelNodeColors = [0x6366f1, 0x0284c7, 0x10b981, 0x8b5cf6, 0x06b6d4, 0xec4899, 0x3b82f6];

    techLabels.forEach((label, idx) => {
      const nodeGeo = new THREE.SphereGeometry(0.36, 12, 12);
      const nodeMat = new THREE.MeshBasicMaterial({
        color: pastelNodeColors[idx % pastelNodeColors.length],
      });
      const nodeMesh = new THREE.Mesh(nodeGeo, nodeMat);
      const radius = 9.5;
      const angle = (idx / techLabels.length) * Math.PI * 2;
      const yOffset = (Math.sin(idx * 1.5) * 2.2);

      nodeMesh.position.set(
        Math.cos(angle) * radius,
        yOffset,
        Math.sin(angle) * radius
      );

      nodesGroup.add(nodeMesh);
      nodeObjects.push({
        mesh: nodeMesh,
        name: label,
        angle,
        radius,
        speed: 0.005 + (idx % 3) * 0.002,
        yOffset,
      });
    });

    // 5. Equatorial Ring Orbit in Soft Pastel Periwinkle
    const ringGeo = new THREE.RingGeometry(8.9, 9.08, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x818cf8,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.55,
    });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringMesh.rotation.x = Math.PI / 2.3;
    mainGroup.add(ringMesh);

    // Mouse Tracking for dynamic parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = currentMount.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      targetX = x * 1.2;
      targetY = y * 1.2;
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (event.touches.length > 0) {
        const touch = event.touches[0];
        const rect = currentMount.getBoundingClientRect();
        const x = (touch.clientX - rect.left) / rect.width - 0.5;
        const y = (touch.clientY - rect.top) / rect.height - 0.5;
        targetX = x * 1.2;
        targetY = y * 1.2;
      }
    };

    currentMount.addEventListener('mousemove', handleMouseMove);
    currentMount.addEventListener('touchmove', handleTouchMove);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Smooth camera/group tilt towards target mouse coordinates
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      if (!prefersReducedMotion) {
        mainGroup.rotation.y += 0.004;
        mainGroup.rotation.x = mouseY * 0.5;
        mainGroup.rotation.z = mouseX * 0.3;

        // Inner Core counter-rotation
        coreMesh.rotation.y -= 0.008;
        coreMesh.rotation.x += 0.005;

        // Orbit nodes update
        nodeObjects.forEach((node) => {
          node.angle += node.speed;
          node.mesh.position.x = Math.cos(node.angle) * node.radius;
          node.mesh.position.z = Math.sin(node.angle) * node.radius;
          node.mesh.position.y = node.yOffset + Math.sin(elapsedTime * 2 + node.angle) * 0.4;
        });

        // Pulsing scale
        const scaleVal = 1 + Math.sin(elapsedTime * 1.5) * 0.02;
        innerLines.scale.set(scaleVal, scaleVal, scaleVal);
      }

      renderer.render(scene, camera);
    };

    animate();

    // Handle Resize
    const handleResize = () => {
      if (!currentMount) return;
      const newWidth = currentMount.clientWidth;
      const newHeight = currentMount.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // Interval to cycle active node label
    const labelInterval = setInterval(() => {
      const randomIdx = Math.floor(Math.random() * techLabels.length);
      setActiveNodeName(techLabels[randomIdx]);
    }, 3200);

    return () => {
      window.removeEventListener('resize', handleResize);
      currentMount.removeEventListener('mousemove', handleMouseMove);
      currentMount.removeEventListener('touchmove', handleTouchMove);
      clearInterval(labelInterval);
      cancelAnimationFrame(animationFrameId);

      // Clean up Three.js memory
      innerGeometry.dispose();
      innerWireframe.dispose();
      innerLineMaterial.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      renderer.dispose();
      if (renderer.domElement && currentMount.contains(renderer.domElement)) {
        currentMount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div 
      className="relative w-full h-[400px] md:h-[480px] lg:h-[520px] flex items-center justify-center select-none"
      onMouseEnter={() => setIsInteracting(true)}
      onMouseLeave={() => setIsInteracting(false)}
    >
      {/* 3D WebGL Canvas Container */}
      <div 
        ref={mountRef} 
        className="w-full h-full cursor-grab active:cursor-grabbing transition-transform duration-300"
        aria-label="Interactive 3D Neural & Code Particle Visualization"
      />

      {/* Floating Technical Coordinates HUD */}
      <div className="absolute top-4 right-4 pointer-events-none text-right">
        <div className="text-[11px] font-mono text-blue-700 font-semibold tracking-wider">
          NEURAL_NODE · 3D
        </div>
        <div className="text-xs font-mono text-slate-700">
          SYS: {activeNodeName || "ACTIVE"}
        </div>
      </div>

      <div className="absolute bottom-4 left-4 pointer-events-none">
        <div className="flex items-center gap-2 text-xs font-mono text-slate-600">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>SRMCEM CSE // 2029</span>
        </div>
      </div>

      {/* Interactive Helper Hint */}
      {isInteracting && (
        <div className="absolute bottom-4 right-4 pointer-events-none text-[11px] font-mono text-blue-800 bg-white/90 border border-blue-200 shadow-sm px-2.5 py-1 rounded">
          Move cursor to tilt 3D sphere
        </div>
      )}
    </div>
  );
};
