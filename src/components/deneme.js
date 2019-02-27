import React from "react";
import posed from "react-pose";
import styled from "styled-components";
import { easing, tween, styler } from 'popmotion';


const Square = posed.div({
    idle: { x: 0 ,
        duration: 200
    },
    hovered: { x: 400,
        transition: props => tween({ ...props, duration: 1000 })
      
    }     
  });

 
  const P = ({ className, children }) => (
    <p className={className}>
      {children}
    </p>
  );

  const StyledP = styled.p` 
    boder-bottom: solid;
  `;
  
  const Deneme =  styled(Square)`
    width: 180px;
    height: 90px;
    background: orange;
    border-style: solid;
     border-width: 5px;
     font-size: x-large;
  `;

  export default Deneme;