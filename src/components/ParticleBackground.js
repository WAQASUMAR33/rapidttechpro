// components/ParticleBackground.js
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

// Adjustable settings
const PARTICLE_COUNT = 2500; // Number of particles
const BASE_ROTATION_SPEED = 0.005; // Base rotation speed
const MOUSE_EFFECT_INTENSITY = 0.005; // How much mouse affects rotation

export default function ParticleBackground() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 500;

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mount.appendChild(renderer.domElement);

    // Particle setup
    const positions = new Float32Array(PARTICLE_COUNT * 3);
    const particleGeometry = new THREE.BufferGeometry();
    const radius = 200; // Radius of the particle sphere

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const phi = Math.acos(2 * Math.random() - 1);
      const theta = 2 * Math.PI * Math.random();

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta); // x
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta); // y
      positions[i * 3 + 2] = radius * Math.cos(phi); // z
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 2 });
    const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particleSystem);

    // Mouse interaction variables
    let mouse = { x: 0, y: 0 };

    // Resize handler
    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }
    window.addEventListener('resize', onWindowResize);

    // Mouse movement effect
    function onMouseMove(event) {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    }
    window.addEventListener('mousemove', onMouseMove);

    // Animation loop
    function animate() {
      requestAnimationFrame(animate);

      // Base rotation
      particleSystem.rotation.y += BASE_ROTATION_SPEED;

      // Apply a slight additional rotation based on mouse position
      particleSystem.rotation.x += MOUSE_EFFECT_INTENSITY * mouse.y;
      particleSystem.rotation.y += MOUSE_EFFECT_INTENSITY * mouse.x;

      renderer.render(scene, camera);
    }
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', onWindowResize);
      window.removeEventListener('mousemove', onMouseMove);
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="fixed bg-black top-0 left-0 w-full h-full -z-10"></div>;
}
