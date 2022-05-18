import React from "react";
import reactDom from "react-dom";

import './Backdrop.css'

function Backdrop(props) {
  return reactDom.createPortal(
    <div className="backdrop" onClick={props.onClick}></div>,
    document.getElementById('backdrop-hook')
  )
}

export default Backdrop