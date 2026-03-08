// components/SoftwareWireframeScene.js

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const SoftwareWireframeScene = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Initialize Scene, Camera, and Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 30;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0); // Black transparent background
    mountRef.current.appendChild(renderer.domElement);

    // Add OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);

    // Array to hold points and lines
    const points = [];
    const lines = [];

    // Create points with bold nodes
    const pointMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const lineMaterial = new THREE.LineBasicMaterial({ color: 0xffffff, linewidth: 2 }); // Thicker line

    const pointCount = 10; // Fewer points for a cleaner look
    const nodeSize = 0.2; // Slightly larger node size for boldness

    // Create points at random positions
    for (let i = 0; i < pointCount; i++) {
      const pointGeometry = new THREE.SphereGeometry(nodeSize, 16, 16); // Larger, smoother nodes
      const pointMesh = new THREE.Mesh(pointGeometry, pointMaterial);
      pointMesh.position.set(
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 30
      );

      points.push(pointMesh);
      scene.add(pointMesh);
    }

    // Create fewer long lines between points
    for (let i = 0; i < pointCount; i++) {
      for (let j = i + 1; j < pointCount; j++) {
        if (Math.random() < 0.05) { // Lower probability to have fewer, longer lines
          const geometry = new THREE.BufferGeometry().setFromPoints([
            points[i].position,
            points[j].position,
          ]);
          const line = new THREE.Line(geometry, lineMaterial);
          lines.push(line);
          scene.add(line);
        }
      }
    }

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Slightly move points to create a floating effect
      points.forEach((point) => {
        point.position.x += (Math.random() - 0.5) * 0.005;
        point.position.y += (Math.random() - 0.5) * 0.005;
        point.position.z += (Math.random() - 0.5) * 0.005;
      });

      // Update line positions to follow the points
      lines.forEach((line) => {
        line.geometry.attributes.position.needsUpdate = true;
      });

      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Handle Window Resize
    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', handleResize);

    // Clean up on component unmount
    return () => {
      mountRef.current.removeChild(renderer.domElement);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} style={{ width: '100vw', height: '100vh' }} />;
};

export default SoftwareWireframeScene;
