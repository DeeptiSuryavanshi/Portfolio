import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useTheme } from '../context/ThemeContext';

export const ThreeBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let renderer: THREE.WebGLRenderer | null = null;
    let animationFrameId: number;
    let resizeObserver: ResizeObserver | null = null;
    let onMouseMove: ((event: MouseEvent) => void) | null = null;
    let geometry: THREE.BufferGeometry | null = null;
    let material: THREE.PointsMaterial | null = null;

    try {
      const width = container.clientWidth || window.innerWidth || 800;
      const height = container.clientHeight || window.innerHeight || 600;

      // Scene, Camera, Renderer
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        60,
        width / (height || 1),
        0.1,
        1000
      );
      camera.position.z = 80;

      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'default' });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
      container.appendChild(renderer.domElement);

      // Particle Geometry
      const particleCount = 140;
      geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(particleCount * 3);
      const velocities = new Float32Array(particleCount * 3);

      const range = 120;
      for (let i = 0; i < particleCount * 3; i += 3) {
        positions[i] = (Math.random() - 0.5) * range;
        positions[i + 1] = (Math.random() - 0.5) * range;
        positions[i + 2] = (Math.random() - 0.5) * range * 0.5;

        velocities[i] = (Math.random() - 0.5) * 0.04;
        velocities[i + 1] = (Math.random() - 0.5) * 0.04;
        velocities[i + 2] = (Math.random() - 0.5) * 0.02;
      }

      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

      const particleColor = theme === 'dark' ? 0x38bdf8 : 0x0284c7;
      material = new THREE.PointsMaterial({
        color: particleColor,
        size: 2.2,
        transparent: true,
        opacity: theme === 'dark' ? 0.6 : 0.4,
        blending: THREE.AdditiveBlending,
      });

      const particles = new THREE.Points(geometry, material);
      scene.add(particles);

      // Mouse Parallax Interaction
      let mouseX = 0;
      let mouseY = 0;
      let targetX = 0;
      let targetY = 0;

      onMouseMove = (event: MouseEvent) => {
        const halfX = window.innerWidth / 2;
        const halfY = window.innerHeight / 2;
        mouseX = (event.clientX - halfX) * 0.0005;
        mouseY = (event.clientY - halfY) * 0.0005;
      };

      window.addEventListener('mousemove', onMouseMove, { passive: true });

      // Resize handling
      const handleResize = () => {
        if (!container || !renderer) return;
        const currentW = container.clientWidth || window.innerWidth || 800;
        const currentH = container.clientHeight || window.innerHeight || 600;
        camera.aspect = currentW / (currentH || 1);
        camera.updateProjectionMatrix();
        renderer.setSize(currentW, currentH);
      };

      resizeObserver = new ResizeObserver(handleResize);
      resizeObserver.observe(container);

      const clock = new THREE.Clock();

      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);
        const elapsedTime = clock.getElapsedTime();

        // Smooth camera interpolation
        targetX += (mouseX - targetX) * 0.05;
        targetY += (mouseY - targetY) * 0.05;
        camera.rotation.y = -targetX * 0.8;
        camera.rotation.x = -targetY * 0.8;

        // Slowly rotate particle field
        particles.rotation.y = elapsedTime * 0.02;
        particles.rotation.x = elapsedTime * 0.01;

        if (renderer) {
          renderer.render(scene, camera);
        }
      };

      animate();
    } catch (err) {
      console.warn('WebGL initialization skipped or failed:', err);
    }

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      if (onMouseMove) window.removeEventListener('mousemove', onMouseMove);
      if (resizeObserver) resizeObserver.disconnect();
      if (container && renderer && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      if (geometry) geometry.dispose();
      if (material) material.dispose();
      if (renderer) renderer.dispose();
    };
  }, [theme]);

  return (
    <div
      id="three-background-canvas"
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-75"
    />
  );
};
