
import React, { useEffect, useRef } from 'react';
import * as BABYLON from '@babylonjs/core';
import '@babylonjs/loaders/glTF/2.0'; // Import the GLTF loader

const BabylonScene= () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Create canvas object
    const canvas = canvasRef.current;
    // Create engine object
    const engine = new BABYLON.Engine(canvas, true);

    //--------------------------------------------------------------------------------------------------------------
    // Create scene
    const createScene = function() {
      const scene = new BABYLON.Scene(engine);
      scene.createDefaultCameraOrLight(true, false, true);

      // Create ambient light
      const ambientLight = new BABYLON.HemisphericLight("ambientLight", new BABYLON.Vector3(1, 0, 0), scene);
      ambientLight.intensity = 1.0; // Adjust the ambient light intensity

      // Set the background color to white
      scene.clearColor = new BABYLON.Color4(1, 1, 1, 1);

      // Load the first .glb file (fluid 1)
      BABYLON.SceneLoader.Append("/fluid1.glb", "", scene, function () {
        const meshOne = scene.meshes[scene.meshes.length - 1]; // Assume the last mesh loaded is the target

        // Center the mesh at the origin
        const boundingInfo = meshOne.getBoundingInfo();
        const center = boundingInfo.boundingBox.center;
        meshOne.position.subtractInPlace(center);

        // Apply transparency
        if (meshOne.material) {
          // Enable transparency mode and set alpha value
          meshOne.material.transparencyMode = BABYLON.Material.MATERIAL_ALPHABLEND;
          meshOne.material.alpha = 0.01;
          meshOne.material.backFaceCulling = false;
        }
        console.log("First GLB file loaded successfully");

        // Load the second .glb file (fluid 2)
        BABYLON.SceneLoader.Append("/fluid2.glb", "", scene, function () {
          const meshTwo = scene.meshes[scene.meshes.length - 1]; // Assume the last mesh loaded is the target

          // Center the mesh at the origin (at the same place of first mesh)
          meshTwo.position.subtractInPlace(center);

          // Set the new mesh's material properties
          if (meshTwo.material) {
            meshTwo.material.alpha = 1.0; // Ensure the new mesh is fully opaque
            meshTwo.material.transparencyMode = BABYLON.Material.MATERIAL_OPAQUE;
          }
          console.log("Second GLB file loaded successfully");
        }, null, function (scene, message) {
          console.error("Failed to load second GLB file: ", message);
        });

      }, null, function (scene, message) {
        console.error("Failed to load first GLB file: ", message);
      });

      return scene;
    }

    const scene = createScene();

    engine.runRenderLoop(function () {
      scene.render();
    });

    return () => {
      scene.dispose();
      engine.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} style={{ width: '70%', height: '100%', border: '1px solid black' }} />;
};

export default BabylonScene;
