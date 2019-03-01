import React from 'react';
import posed from "react-pose";

const Shft = posed.div({
   shift:{
       x:({x})=>x,
       y:({y})=>y,
},
   null:{},
  })

  const ShiftXY = ({children ,pose,x,y}) =>{
    
    return (
    <Shft pose={pose} x={x} y={y}>
    {children}
     </Shft>)
}
export default ShiftXY