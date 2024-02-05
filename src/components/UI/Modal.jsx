import React from 'react'
import styled from 'styled-components'
import ReactDOM from 'react-dom'
const Modal = ({isOpen, onClose, children}) => {
    if (!isOpen) return null
  return ReactDOM.createPortal (
        <Overlay>
         <Content>
            <CloseButton onClick={onClose}>&times;</CloseButton>
            {children}
         </Content>
      </Overlay>,
      document.getElementById('modal')
        )
}

export default Modal

const Overlay = styled.div`
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   background: rgba(0, 0, 0, 0.5);
   display: flex;
   justify-content: center;
   align-items: center;
`

const Content = styled.div`
   background: #fff;
   padding: 20px;
   border-radius: 5px;
`

const CloseButton = styled.button`
   position: absolute;
   top: 10px;
   right: 10px;
   font-size: 18px;
   cursor: pointer;
   background: none;
   border: none;
   outline: none;
`