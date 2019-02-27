import React from "react";
import posed from "react-pose";
import styled from "styled-components";

const Square = posed.div({
    idle: { scale: 1 },
    hovered: { scale: 1.5 }
  });
  
  const StyledSquare = styled(Square)`
    width: 200px;
    height: 100px;
    background: orange;
  `;

  export default StyledSquare;