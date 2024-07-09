import * as BABYLON from '@babylonjs/core';
import '@babylonjs/loaders/glTF/2.0'; // Import the GLTF loader

const createBabylonEngine = (canvas) => {
  return new BABYLON.Engine(canvas, true);
};

const createBabylonScene = (engine, arcRotateCamera, replaceCameraLight, cameraControls) => {
  const scene = new BABYLON.Scene(engine);
  scene.createDefaultCameraOrLight(arcRotateCamera, replaceCameraLight, cameraControls);

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
        
        // Calculate center of mass
        const boundingInfo = mesh.getBoundingInfo();
        const meshCenter = boundingInfo.boundingBox.center;
        const centerToUse = center || meshCenter;

        // Calculate offset to move mesh to origin
        const offset = new BABYLON.Vector3(0, centerToUse.z, 0);

        // First rotation arround X axis
        const rotationQuaternionX = mesh.rotationQuaternion = BABYLON.Quaternion.RotationAxis(BABYLON.Axis.X, 3/2 * Math.PI);

        // Second rotation arround Y axis
        const rotationQuaternionY = BABYLON.Quaternion.RotationAxis(BABYLON.Axis.Y, Math.PI);
        mesh.rotationQuaternion = rotationQuaternionY.multiply(rotationQuaternionX || BABYLON.Quaternion.Identity());

        mesh.position.subtractInPlace(offset);

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
