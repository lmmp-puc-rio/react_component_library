function BabylonScene(props){
  const canvasRef = props.canvasRef;
  const style = props.style;

  return <canvas style={style} ref={canvasRef} />;
};

export default BabylonScene;
