// Main Imports
import React, { useEffect, useRef } from 'react';
import { createBabylonEngine, createBabylonScene, loadGLBModel } from '../components/common/babylonScene/babylonConfig';

// Import GLB files
import fluid1GLB from '../data/files/fluid1.glb';
import fluid2GLB from '../data/files/fluid2.glb';

// Local SubComponents & utils
import { BabylonScene } from "../components/common";

// Import Component Style
function ConcentrationGraphic(props){

  // Scene parameters
  const arcRotateCamera =  true;
  const replaceCameraLight = false;
  const cameraControls = true;

  const canvasRef = useRef(null);
  
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const engine = createBabylonEngine(canvas);
    const scene = createBabylonScene(engine, arcRotateCamera, replaceCameraLight, cameraControls);
    
    (async () => {
      try {
        const { mesh: meshOne, center: centerOne } = await loadGLBModel(scene, fluid1GLB, true);
        console.log("First GLB file loaded successfully");

        await loadGLBModel(scene, fluid2GLB, false, centerOne);
        console.log("Second GLB file loaded successfully");
      } catch (error) {
        console.error(error.message);
      }
    })();

    engine.runRenderLoop(() => {
      scene.render();
    });

    return () => {
      scene.dispose();
      engine.dispose();
    };
  }, []);


  const style = {
    width: "100%",
    height: "100%",
    border: "1px solid",
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "80vh", // Full viewport height
  };

  const innerContainerStyle = {
    width: "60%", // Adjust the width as needed
    height: "80%", // Adjust the height as needed
  };

  return (
    <div style={containerStyle}>
      <div style={innerContainerStyle}>
        <h1 style={{ textAlign: "center" }}>8PRM7D_RetroSimAnularA</h1> 
        <BabylonScene canvasRef={canvasRef} style={style} />
      </div>
    </div>
  );
};

export default ConcentrationGraphic;
