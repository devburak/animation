import React from 'react';
import posed from "react-pose";
import SplitText from 'react-pose-text';

const charPoses = {
    exit: { opacity: 0, y: 20 },
    enter: {
      opacity: 1,
      y: 0,
      delay: ({ charIndex }) => charIndex * 30
    }
  };
  const Div = posed.div({
      visible:{opacity:1},
      hidden : {opacity:0}
  })

  const Text = ({children ,isVisible,}) =>{
      console.log(children)
      return (<Div  pose={isVisible ? "visible" : "hidden"}><SplitText initialPose="exit" pose="enter" charPoses={charPoses}> Deneme </SplitText>
      {children}
       </Div>)
  }

export default Text
