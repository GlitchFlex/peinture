import React, {useState} from 'react'
import './utilityBar.css'
import {FiEdit2,  FiInbox,FiCodepen, FiDroplet , FiType, FiTrash2 ,FiRotateCcw, FiRotateCw } from "react-icons/fi";
import {Slider, Tooltip } from 'antd';


const UtilityBar = ({setActiveButton, activeButton, setIsColorModalOpen, isColorModalOpen, setIsShapeModalOpen, isShapeModalOpen}) => {

  // const [activeButton, setActiveButton] = useState("pencil"); 

  // const [fabricCanvas, setFabricCanvas] = useState();


  const clickHandlerPencil = ()=>{
    setActiveButton("pencil")
  }
  const clickHandlerEraser = ()=>{
    setActiveButton("eraser")
  }
  const clickHandlerColour = ()=>{
    setActiveButton("colour")
    setIsColorModalOpen(true);

  }
  const clickHandlerShapes = ()=>{
    setActiveButton("shapes")
    setIsShapeModalOpen(true);
    
  }
  const clickHandlerText = ()=>{
    setActiveButton("text")

  }
  const clickHandlerUndo = ()=>{
    setActiveButton("undo")

  }
  const clickHandlerRedo = ()=>{
    setActiveButton("redo")

  }
  const clickHandlerClear = ()=>{
    setActiveButton("clear")

  }
 
  
  

  

  return (
    <>
    <div style={{width : "100%", display : "flex", alignItems : "center", justifyContent  : "center", }}>
    <div className="utilityBar">
        <div 
        className={activeButton==="pencil" ? "iconButton active" : "iconButton"}
        onClick={clickHandlerPencil}>
          <Tooltip  placement="top" title = "pencil">
          <FiEdit2 className = "icon"/>
          </Tooltip>
        </div>
        <div 
        className={activeButton==="eraser" ? "iconButton active" : "iconButton"}
        onClick={clickHandlerEraser}>
          <Tooltip placement="top" title = "Eraser">
          <FiInbox className = "icon"/>
          </Tooltip>
        </div>
        <div
        className={activeButton==="colour" ? "iconButton active" : "iconButton"}
        onClick={clickHandlerColour}>
          <Tooltip placement="top" title = "Color">
          <FiDroplet className = "icon"/>
          </Tooltip>
        </div>
        <div
        className={activeButton==="shapes" ? "iconButton active" : "iconButton"}
        onClick={clickHandlerShapes}>
          <Tooltip title = "Shapes" >
          <FiCodepen  className = "icon"/>
          </Tooltip>
        </div>
        <div
        className={activeButton==="text" ? "iconButton active" : "iconButton"}
        onClick={clickHandlerText}>
          <Tooltip title = "Text">
          <FiType className = "icon"/>
          </Tooltip>
        </div>
        <div
        className={activeButton==="undo" ? "iconButton active" : "iconButton"}
        onClick={clickHandlerUndo}>
          <Tooltip placement="top" title = "Undo">
          <FiRotateCcw className = "icon"/>
          </Tooltip>
        </div>
        <div
        className={activeButton==="redo" ? "iconButton active" : "iconButton"} 
        onClick={clickHandlerRedo}>
          <Tooltip  placement="top" title = "Redo">
          <FiRotateCw className = "icon"/>
          </Tooltip>
        </div>
        <div
        className={activeButton==="clear" ? "iconButton active" : "iconButton"}
        onClick={clickHandlerClear}>
          <Tooltip  placement="top" title = "Clear">
          <FiTrash2 className = "icon"/>
          </Tooltip>
        </div>
    </div>
    </div>
    
    </>
  )
}

export default UtilityBar;