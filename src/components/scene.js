import React from 'react';
import posed from "react-pose";
import styled from "styled-components";
import { easing, tween, styler } from 'popmotion';


  const Box = posed.div({
    draggable: true,
    
  });

  



const Scene = (props) => {

    return (
        <div >
        <img  src="/img/barrel.png" useMap="#barrel-map" />
        <map name="barrel-map">
            <area target="" alt="sf" title="sf" onClick={() => console.log('sf')} coords="72,96,71,215,97,228,220,237,325,227,359,215,357,97,322,107,220,112,98,105" shape="poly"></area>
        </map>
       
        </div>
        );

}

export default Scene;