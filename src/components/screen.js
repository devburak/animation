import React from 'react';
import posed from "react-pose";
import Char from './char';

const Sc = posed.div({
    open:{ height:"100%", opacity:1, flip:true ,z:100},
    closed: { height: '0px', opacity:0, flip: true, z:0}     
  })

  const Screen = ({children ,isOpen,style, text}) =>{
    return (
    <Sc className="screen-bg" pose={isOpen ? "open" : "closed"} style={isOpen? {zIndex:100}:{zIndex:0}} >
    {children}
    <Char text={text} />
     </Sc>)
}
export default Screen