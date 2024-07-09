import * as BABYLON from '@babylonjs/core';
import '@babylonjs/loaders/glTF/2.0'; // Import the GLTF loader

const createBabylonEngine = (canvas) => {
  return new BABYLON.Engine(canvas, true);
};

const createBabylonScene = (engine) => {
  const scene = new BABYLON.Scene(engine);
  scene.createDefaultCameraOrLight(true, false, true);

  // Create ambient light
  const ambientLight = new BABYLON.HemisphericLight("ambientLight", new BABYLON.Vector3(1, 0, 0), scene);
  ambientLight.intensity = 1.0; // Adjust the ambient light intensity

  // Set the background color to white
  scene.clearColor = new BABYLON.Color4(1, 1, 1, 1);

  return scene;
};

const loadGLBModel = (scene, url, alpha, center) => {
    return new Promise((resolve, reject) => {
      BABYLON.SceneLoader.Append(url, "", scene, function () {
        const mesh = scene.meshes[scene.meshes.length - 1]; // Assume the last mesh loaded is the target
  
        // Center the mesh at the origin or at the specified center
        const boundingInfo = mesh.getBoundingInfo();
        const meshCenter = boundingInfo.boundingBox.center;
        const centerToUse = center || meshCenter; // Use the specified center or the mesh's center
        mesh.position.subtractInPlace(centerToUse);
  
        // Apply transparency
        if (mesh.material) {
          mesh.material.transparencyMode = alpha ? BABYLON.Material.MATERIAL_ALPHABLEND : BABYLON.Material.MATERIAL_OPAQUE;
          mesh.material.alpha = alpha ? 0.01 : 1.0;
          mesh.material.backFaceCulling = false;
        }
  
        resolve({ mesh, center: meshCenter });
      }, null, function (scene, message) {
        reject(new Error(message));
      });
    });
  };

export { createBabylonEngine, createBabylonScene, loadGLBModel };
