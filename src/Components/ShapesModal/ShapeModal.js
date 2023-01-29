import { Modal } from 'antd'
import React from 'react'

const ShapeModal = ({isShapeModalOpen, setIsShapeModalOpen}) => {
  return (
    <Modal open={isShapeModalOpen} onOk={()=>{setIsShapeModalOpen(false)}} onCancel={()=>{setIsShapeModalOpen(false)}}>
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </Modal>
  )
}

export default ShapeModal