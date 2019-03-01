import React from 'react';
import posed from "react-pose";

const Shft = posed.div({
   left:{x:({unit})=>-unit},
   right:{x:({unit})=>unit},
   init :{
   x:({initX})=>initX,
   y:({initY})=>initY
  },
   props:{unit:0}
  })

  const ShiftX = ({children ,pose,unit,initX,initY}) =>{
    
    return (
    <Shft pose={pose} unit={unit} initX={initX} initY={initY}>
    {children}
     </Shft>)
}
export default ShiftX