import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.getElementById( 'modal' );

const Modal = (props) => {
  
  let element = document.createElement( 'div' );
  
  useEffect(() => {
    modalRoot.appendChild( element )
    return () => modalRoot.removeChild( element )
  }, [props])

  return createPortal(props.children, element );
}

export default Modal;