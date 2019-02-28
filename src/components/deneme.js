import React from "react";
import posed from "react-pose";
import styled from "styled-components";
import { easing, tween, action  } from 'popmotion';
import Text from './text';

const Square = posed.div({
    idle: { x: 0 , y:120
    },
    hovered: { x: 340, y:20,
        transition: props => tween({ ...props, duration: 100 })
        
    }     
  })

  
  
  const Dx =  styled(Square)`
    width: 180px;
    height: 90px;
    background: orange;
    border-style: solid;
     border-width: 5px;
     font-size: x-large;
  `;
    const Deneme = (props) =>{
        return(<Dx {...props}>
            {props.children}
            <Text isVisible={props.pose=="hovered"?true:false} text={'Deneme'}  style={{left:-5, color:"white"}}>
            <h3>TURUNCU RENKLİ PLAKA</h3>
            
            <p className="text">Tehlikeli mal taşıyan taşıma ünitelerinde, dikey düzleme yerleştirilmiş şekilde 5.3.2.2.1'e uygun iki adet
turuncu renkli dikdörtgen plaka bulunmalıdır. Her ikisi de taşıma ünitesinin dikey eksenine doksan derece
dik olacak şekilde taşıma ünitesinin ön ve arka tarafına takılmalıdır. Açıkça görünür olmalıdır.
Tehlikeli malların taşınması sırasında, tehlikeli mal içeren römork motorlu araçtan ayrılmışsa, turuncu
renkli plaka römorkun arkasına tutturulmuş şekilde kalacaktır. </p>
        </Text>
        </Dx>)
    }
  export default Deneme;