import React from 'react';
import posed from "react-pose";

const Cdiv = posed.div({
    enter: {
        y: 0,
        opacity: 1,
        delay: 300,
        transition: {
          y: { type: 'spring', stiffness: 1000, damping: 15 },
          default: { duration: 300 }
        }
      },
      exit: {
        y: 50,
        opacity: 0,
        transition: { duration: 150 }
      }
  })

  const CharDiv = ({children ,isOpen,style,className}) =>{
    return (
    <Cdiv pose={isOpen ? "enter" : "exit"} style={style} className={className} >
    {children}
     </Cdiv>)
}
export default CharDiv