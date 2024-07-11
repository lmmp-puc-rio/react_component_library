import React, { useEffect, useRef, useState } from 'react';
import { createBabylonEngine, createBabylonScene, loadGLBModel } from '../components/common/babylonScene/babylonConfig';

// Import GLB files
import fluid1GLB from '../data/files/fluid1.glb';
import fluid2GLB from '../data/files/fluid2.glb';

// Local SubComponents & utils
import { BabylonScene, ComboBox } from "../components/common";

//===================================================================================================
//===================================================================================================
function ConcentrationGraphic(props) {

  const wellName = props.wellName;
  const [selectedOption, setSelectedOption] = useState(''); // for ComboBox
  const canvasRef = useRef(null); // for Babylon Scene
  const handleSelectChange = (value) => {
    setSelectedOption(value); // for ComboBox
  };

  useEffect(() => {
    if (!selectedOption) return;

    const canvas = canvasRef.current;
    const engine = createBabylonEngine(canvas);
    const scene = createBabylonScene(engine, true, false, true);

    //---------------------------------------------------------------------------------------------------
    const loadModels = async () => {

      // TODO: TROCAR POR SWITCH CASE E CRIAR UMA FUNÇÃO QUE CONSTROI O COMBO BASEADO NO NUMERO DE FLUIDOS
      try {
        if (selectedOption === '1') {
          const { mesh: meshOne, center: centerOne } = await loadGLBModel(scene, fluid2GLB, true);
          console.log("First GLB file loaded successfully");
          await loadGLBModel(scene, fluid1GLB, false, centerOne);
          console.log("Second GLB file loaded successfully");
        } else if (selectedOption === '2') {
          const { mesh: meshOne, center: centerOne } = await loadGLBModel(scene, fluid1GLB, true);
          console.log("First GLB file loaded successfully");
          await loadGLBModel(scene, fluid2GLB, false, centerOne);
        }
      } catch (error) {
        console.error(error.message);
      }

    };

    loadModels();

    //---------------------------------------------------------------------------------------------------
    engine.runRenderLoop(() => {
      scene.render();
    });

    return () => {
      scene.dispose();
      engine.dispose();
    };
  }, [selectedOption]);

  const style = {
    width: "100%",
    height: "100%",
    border: "1px solid",
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "70vh",
  };

  const innerContainerStyle = {
    width: "60%",
    height: "80%",
  };

  //---------------------------------------------------------------------------------------------------
  return (
    <div style={containerStyle}>
      <div style={innerContainerStyle}>
        <ComboBox onSelectChange={handleSelectChange} />
        <BabylonScene canvasRef={canvasRef} style={style} />
        <h1 style={{ textAlign: "center" }}>{wellName}</h1>
        
      </div>
    </div>
  );
};

export default ConcentrationGraphic;
