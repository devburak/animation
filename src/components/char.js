import React from 'react';
import ReactDOM from 'react-dom';
import SplitText from 'react-pose-text';


const charPoses = {
    exit: { opacity: 0, y: 20 },
    enter: {
      opacity: 1,
      y: 0,
      delay: ({ charIndex }) => charIndex * 30
    }
  };

  const Char = ({text }) =>{
    return (
        <div className="char-container">
            <div className="char">
                <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
                    {text}
                </SplitText>
            </div>
        </div>
  )
  }

  export default Char;

