import React, {useEffect, useState, useRef, useContext} from 'react'
import './Canvas.css'
import {fabric} from 'fabric';
import { Slider } from 'antd';
// import { ActiveButonContext } from '../../App';



const Canvas = ({activeButton, setActiveButton, selectedColor, customColor}) => {
  
  const canvasRef = useRef(null);

  

  const [fabricCanvas, setFabricCanvas] = useState();
  console.log(activeButton);
  useEffect(()=>{
    const canvas = new fabric.Canvas(canvasRef.current,{
        backgroundColor : "white",
        width : window.innerWidth,
        height : window.innerHeight,
        isDrawingMode : true,
    })
    setFabricCanvas(canvas);
    return ()=>{
        canvas.dispose();
    }
  }, [canvasRef])


  const changePenWidth = (value) =>{
    if(fabricCanvas){
        fabricCanvas.freeDrawingBrush.width = value;
        fabricCanvas.renderAll.bind(fabricCanvas);
    }
    
}
if(activeButton==="pencil" && fabricCanvas){
    fabricCanvas.freeDrawingBrush.color = "black";
    fabricCanvas.renderAll.bind(fabricCanvas);
    
  }

if(activeButton==="eraser" && fabricCanvas){
    fabricCanvas.freeDrawingBrush.color = "white";
    fabricCanvas.renderAll.bind(fabricCanvas);
    
  }

if(!selectedColor && !customColor && fabricCanvas && activeButton!="eraser"){
  fabricCanvas.freeDrawingBrush.color = "#000";
    fabricCanvas.renderAll.bind(fabricCanvas);
    
  }
  
  if(!selectedColor && customColor && fabricCanvas && activeButton!="eraser"){
  fabricCanvas.freeDrawingBrush.color = customColor;
    fabricCanvas.renderAll.bind(fabricCanvas);
  
}
  if(selectedColor && !customColor && fabricCanvas && activeButton!="eraser"){
  fabricCanvas.freeDrawingBrush.color = selectedColor;
    fabricCanvas.renderAll.bind(fabricCanvas);
  
}

// if(activeButton==="text"){
//   fabricCanvas.text
// }




  return (
    <div style = {{width : "100vw", height : "100vh", overflow : "hidden"}}>
    <canvas ref={canvasRef}></canvas>
    <div style = {{width : "3rem", height : "30vw", position : "absolute", background : "rgb(79, 79, 79)",display: "flex",alignItems: "center", justifyContent : "center",borderRadius  : "10px",left : "1rem", bottom : "2.5vw"}}>
      <Slider min = {1} max = {30} onChange = {(value)=>changePenWidth(value)} vertical style = {{height : "90%", }} trackStyle = {{backgroundColor : "azure", color : "black"}} handleStyle = {{borderColor : "azure"}} />
    </div>
    </div>
  )
}

export default Canvas