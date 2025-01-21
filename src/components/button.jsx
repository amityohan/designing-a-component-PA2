// write button card here
import React from "react";
import Popup from "./popup";

const Button=({children,onClick})=>{
    const [isOpen,setIsOpen]=useState(false);
    const handleOpen = () => {
        setIsOpen(true);
      };
    
    const handleClose = () => {
        setIsOpen(false);
      };
    return(
        <>
        <button onClick={handleOpen}>
            {children} {/* this is the component which will pop up  */}   
            
        </button>
       {isOpen && (
           <Popup onClose={handleClose}>
          <h2>Product Details</h2>
          <p>This is a sample product.</p>
        </Popup>
       )}
       </>
    )
}

export default Button;