import { render } from "@testing-library/react"
import { createPortal } from "react-dom"
import React, { Component } from "react";
const modalRoot = document.querySelector('#modal-root')

export class Modal extends Component
{ 
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyD )
        
    }

    componentWillUnmount(){
            window.removeEventListener('keydown', this.handleKeyD )
        }
    handleKeyD = e => {
        if (e.code === 'Escape') {
                console.log("shoul close")
                this.props.onClose()
        }

       

    }
 handleBackdropClick = e => {
            console.log("clickBackdrop")
            console.log(e.currentTarget)
     console.log(e.target)
     if (e.currentTarget === e.target) {
         this.props.onClose()
     }
}

    render() {
    const { srcImg, tags } = this.props
return createPortal( <div className="overlay" onClick={this.handleBackdropClick}>
  <div className="modal">
    <img src={srcImg}  alt={tags} />
  </div>
</div>, modalRoot)
}
  
}
 