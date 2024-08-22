import * as BABYLON from '@babylonjs/core';
import '@babylonjs/loaders/glTF/2.0'; // Import the GLTF loader
import * as GUI from '@babylonjs/gui'; // Import the GUI module

const createBabylonEngine = (canvas) => {
  return new BABYLON.Engine(canvas, true);
};

const createBabylonScene = (engine, arcRotateCamera, replaceCameraLight, cameraControls) => {
  const scene = new BABYLON.Scene(engine);
  scene.createDefaultCameraOrLight(arcRotateCamera, replaceCameraLight, cameraControls);
  BABYLON.SceneLoader.ShowLoadingScreen = false; // set babylon loading to false

  // Create ambient light
  const ambientLight = new BABYLON.HemisphericLight("ambientLight", new BABYLON.Vector3(1, 0, 0), scene);
  ambientLight.intensity = 1.0; // Adjust the ambient light intensity

  // Set the background color to white
  scene.clearColor = new BABYLON.Color4(0.9, 0.9, 0.9, 1);

  const camera = scene.activeCamera;
  if (camera instanceof BABYLON.ArcRotateCamera) {
    camera.panningSensibility = 0; // Disable panning (translation)
    camera.useBouncingBehavior = false; // Disable bouncing behavior
    camera.useAutoRotationBehavior = false; // Disable auto-rotation behavior

    // Set the camera to orthographic mode
    camera.mode = BABYLON.Camera.ORTHOGRAPHIC_CAMERA;

    // Define the orthographic parameters
    const aspectRatio = engine.getAspectRatio(camera);
    let zoomLevel = 1.1; // Initial zoom level
    camera.orthoLeft = -zoomLevel * aspectRatio;
    camera.orthoRight = zoomLevel * aspectRatio;
    camera.orthoTop = zoomLevel;
    camera.orthoBottom = -zoomLevel;

    // Add a scroll event listener to adjust the zoom level
    window.addEventListener("wheel", (event) => {
      // Adjust the zoom level based on the scroll direction
      zoomLevel *= event.deltaY > 0 ? 1.1 : 0.9;

      // Update the orthographic parameters
      camera.orthoLeft = -zoomLevel * aspectRatio;
      camera.orthoRight = zoomLevel * aspectRatio;
      camera.orthoTop = zoomLevel;
      camera.orthoBottom = -zoomLevel;
      
    });

    // Adjust camera limits to allow free rotation
    camera.lowerAlphaLimit = null; // Remove lower limit
    camera.upperAlphaLimit = null; // Remove upper limit
    camera.lowerBetaLimit = 0.0; // Adjust as needed
    camera.upperBetaLimit = Math.PI; // Adjust as needed

    // Adjust the camera position to avoid clipping
    camera.radius = 20; // Adjust this value to ensure the object is not clipped
  }

  return scene;
};

const loadGLBModel = (scene, url, alpha, center) => {
  return new Promise((resolve, reject) => {
      BABYLON.SceneLoader.Append(url, "", scene, function () {
          const mesh = scene.meshes[scene.meshes.length - 1]; //Wireframe mesh
          const meshTwo = scene.meshes[0]; //Fluid mesh

          // Calculate center of mass and offset for mesh
          const boundingInfo = mesh.getBoundingInfo();
          const meshCenter = boundingInfo.boundingBox.center;
          
          // Calculate center of mass and offset for meshTwo
          const boundingInfoTwo = meshTwo.getBoundingInfo();
          const meshCenter2 = boundingInfoTwo.boundingBox.center;
          const offsetTwo = new BABYLON.Vector3(meshCenter2.x, meshCenter2.y, meshCenter2.z);

          const offset = new BABYLON.Vector3(meshCenter.x, meshCenter.y, meshCenter.z);
          meshTwo.position.subtractInPlace(offset);

          var aspect_ratio = 500;
          var interval_number = 20;
          var boundingBox = mesh.getBoundingInfo().boundingBox;
          var min = boundingBox.minimumWorld;
          var max = boundingBox.maximumWorld;
          var distanceToBase = min.y - meshCenter.y;
          var space = (max.y - min.y) / interval_number;

          var edges = [];
          for (var i = 0; i <= interval_number; i++) {
              edges.push({
                  position: new BABYLON.Vector3(- 2 * max.x, min.y + i * space + distanceToBase, 0),
                  label: (min.y + i * space).toFixed(1) * aspect_ratio  + " m"
              });
          }

          // Create a TransformNode to group the edge meshes
          const edgeParent = new BABYLON.TransformNode("edgeParent", scene);

          // Add edges as child nodes of edgeParent
          edges.forEach(edge => {
              var edgeMesh = BABYLON.MeshBuilder.CreateBox("edge", { size: 0.005 }, scene);
              edgeMesh.position = edge.position;
              edgeMesh.visibility = 0; // Make the edge mesh invisible
              edgeMesh.parent = edgeParent; // Set the TransformNode as parent

              var label = new GUI.TextBlock();
              label.text = edge.label;
              label.color = "black";
              label.fontSize = 12;
 
              label.textVerticalAlignment = GUI.Control.VERTICAL_ALIGNMENT_CENTER;

              var advancedTexture = GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI", true, scene);
              advancedTexture.addControl(label);
              label.linkWithMesh(edgeMesh); // Link label with the edge mesh
          });

          scene.onBeforeRenderObservable.add(() => {
            // Align the edgeParent with the camera's rotation around the Y axis
            const viewMatrix = scene.activeCamera.getViewMatrix();
            const rotationMatrix = BABYLON.Matrix.Identity();
            rotationMatrix.copyFrom(viewMatrix);
        
            // Extract the Y rotation from the view matrix
            const yRotation = Math.atan2(-viewMatrix.m[8], viewMatrix.m[10]);
        
            // Apply the Y rotation to the edgeParent
            edgeParent.rotation.y = yRotation;
        });

          resolve({ mesh, center: meshCenter });
          resolve({ meshTwo, center: meshCenter2 });
      }, null, function (scene, message) {
          reject(new Error(message));
      });
  });
};

export { createBabylonEngine, createBabylonScene, loadGLBModel };
