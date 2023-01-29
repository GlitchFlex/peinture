import { Modal, Typography } from 'antd';
import React, { useState } from 'react';
import { FiCheck } from 'react-icons/fi';
import './ColorModal.css';
import { HexColorPicker } from "react-colorful";





const ColorModal = ({isColorModalOpen, setIsColorModalOpen, selectedColor, setSelectedColor, setCustomColor, customColor}) => {

  const { Title } = Typography;

  const colorPreset = ["#c21413","#026ffd", "#147e01", "#d96d2d", "#edd655", "#f2727d","#5ccfc1", "#f4a355", "#9933ff", "#000000", "#663300" ,"#669999", "#000066","#003300", "#ff0066", "#660066"]  ;
//   const [customColor, setCustomColor] = useState("#000");
    console.log("custom color", customColor);
    console.log("preset color", selectedColor);


  return (
    <Modal  open={isColorModalOpen} footer={null} onOk={()=>{setIsColorModalOpen(false)}} onCancel={()=>{setIsColorModalOpen(false)}}>
        <Title level={4}>Presets</Title>
        <div style = {{marginTop : "20px",width : "350px", display : "grid", gridTemplateColumns : "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr"}}>
            {colorPreset.map((e)=>(
                <div 
                onClick={()=>{setSelectedColor(e); setCustomColor(); setIsColorModalOpen(false)}}
                style = {selectedColor === e ? {marginBottom : "15px", width : "30px", height : "30px", borderRadius : "50%", backgroundColor : e, cursor : "pointer", display : "flex", alignItems : "center", justifyContent : "center"} : {marginBottom : "15px",width : "30px", height : "30px",  display : "flex", alignItems : "center", justifyContent : "center",borderRadius : "50%", backgroundColor : e, cursor : "pointer",}}>
                    <FiCheck style = {selectedColor === e ? {color : "white"} : {display : "none"}}/>
                </div>
            ))}
        </div>
        <Title level={4}>Custom Color </Title>
        <div>
            <HexColorPicker style={{width : "300px", height : "300px"}} customColor={customColor} onChange={(e)=>{setCustomColor(e); setSelectedColor()}} />
        </div>
    </Modal>
  )
}

export default ColorModal


// {width : "25px", height : "25px", borderRadius : "50%", backgroundColor : e, cursor : "pointer",}