// Main Imports
import React, { useEffect, useRef } from 'react';
import { createBabylonEngine, createBabylonScene, loadGLBModel } from '../components/common/babylonScene/babylonConfig';

// Local SubComponents & utils
import { BabylonScene } from "../components/common";

// Import Component Style
function ConcentrationGraphic(props){

  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const engine = createBabylonEngine(canvas);
    const scene = createBabylonScene(engine);
    
    (async () => {
      try {
        const { mesh: meshOne, center: centerOne } = await loadGLBModel(scene, "/fluid1.glb", true);
        console.log("First GLB file loaded successfully");

        await loadGLBModel(scene, "/fluid2.glb", false, centerOne);
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
    width: "70%",
    height: "100%",
    border: "1px solid",
  };


  return (
    <div>
       <h1>Babylon Model Viewer</h1> 
      <BabylonScene canvasRef={canvasRef} style={style} />
  
    </div>
  );
};

export default ConcentrationGraphic;
