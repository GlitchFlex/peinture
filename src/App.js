import './App.css';
import React,{ useState } from 'react';
import Canvas from './Components/Canvas/Canvas';
import UtilityBar from './Components/UtilityBar/UtilityBar';
// import ColorModal from './ColorModal/ColorModal';
import ShapeModal from './Components/ShapesModal/ShapeModal';
import ColorModal from './Components/ColorModal/ColorModal';



function App() {

  const [activeButton, setActiveButton] = useState("pencil");
  const [isColorModalOpen, setIsColorModalOpen] = useState(false); 
  const [selectedColor, setSelectedColor] = useState();
  const [customColor, setCustomColor] = useState();
  const [isShapeModalOpen, setIsShapeModalOpen] = useState(false);

  return (
    
    <div className="App">
     <Canvas activeButton = {activeButton} setActiveButton = {setActiveButton} customColor = {customColor} selectedColor = {selectedColor}/>
     <UtilityBar  
      activeButton = {activeButton} setActiveButton = {setActiveButton} 
      setIsColorModalOpen = {setIsColorModalOpen} isColorModalOpen = {isColorModalOpen}
      isShapeModalOpen = {isShapeModalOpen}
      setIsShapeModalOpen = {setIsShapeModalOpen} 
     />
     <ColorModal isColorModalOpen = {isColorModalOpen} customColor = {customColor} setCustomColor = {setCustomColor} setIsColorModalOpen= {setIsColorModalOpen} selectedColor = {selectedColor} setSelectedColor  = {setSelectedColor}/>
      <ShapeModal isShapeModalOpen = {isShapeModalOpen} setIsShapeModalOpen = {setIsShapeModalOpen}/>
    </div>
   
  );
}

export default App;
