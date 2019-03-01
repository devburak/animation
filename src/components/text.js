import React from 'react';
import posed from "react-pose";
import { tween } from 'popmotion';


  const Div = posed.div({
      visible:{
          opacity:1,
          delay: 100
    },
      hidden : {opacity:0}
  })

  const Text = ({children ,isVisible,style,className="box arrow-left-top"}) =>{

      return (
      <Div className={className}  style={style} pose={isVisible ? "visible" : "hidden"}>
      {children}
       </Div>)
  }
export default Text
