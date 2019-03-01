import React from 'react';
import posed from "react-pose";
import { delay } from 'popmotion';

const Hover = posed.div({
    open:{ height:"100%", opacity:1, flip:true},
    closed: { 
        delay:1000,
        opacity:0, 
        flip: true, 
        
        }     
  })

  const HoverVisible = ({children ,isOpen}) =>{
    return (
    <Hover pose={isOpen ? "open" : "closed"} style={isOpen? {zIndex:101,display:"contents"}:{zIndex:0,display:"none"}} >
    {children}
     </Hover>)
}
export default HoverVisible