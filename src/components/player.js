import React from 'react';
import {Button, Container,Row,Col,ButtonToolbar} from 'react-bootstrap';
import Scene from './scene';
import styled from "styled-components";
import Deneme from './deneme';
import Sign from './warningSign';
import Text from './text';

const StyledP = styled.p` 
    border-bottom: solid 4px;
    margin-bottom:0px;
  `;

  
  const P = ({ className, children }) => (
    <p className={className}>
      {children}
    </p>
  );
class Player extends React.Component{

    constructor(props){
        super(props);
        this.state={
            time:0,
            start:false,
            hovering:false
        }
    }
    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
      }
      componentWillUnmount() {
        clearInterval(this.interval);
      }

    clickHandle =(event)=>{
        console.log(event)
    }
    tick=()=> {
     if(this.state.start)
        this.setState(prevState => ({
          time: prevState.time + 1
        }));
      }

    stop=()=>{
        this.setState({start:false});
        clearInterval(this.interval);
    }
    start=()=>{
        this.setState({start:true});
        this.interval = setInterval(() => this.tick(), 1000);
    }

    toglleHandle =()=>{
        if(this.state.start) this.setState({start:false})
        else this.setState({start:true})
    }
    
    toggleDeneme = ()=>{
        if(this.state.hovering) this.setState({hovering:false})
        else this.setState({hovering:true})
        console.log(this.state.hovering)
    }
    

    render(){
        return (
            <Container>
                <Row>

                    <Button variant="outline-success" onClick={this.toglleHandle}>
                     { this.state.start ?  <i className="fas fa-pause"></i>  :   <i className="fas fa-play"></i> }
                    </Button>
                     <p>{this.state.time}</p>
                </Row>
              
                    
                    <Row  style={{position:"relative"}}>
                    <Scene />
                    <div style={{
                        position: "absolute",
                        top: 130,
                        left: 111
                    }} >    
                      <Deneme
                            pose={this.state.hovering ? "hovered" : "idle"}
                            onClick={this.toggleDeneme}
                           
                        > 
                        <StyledP><strong>33</strong></StyledP>
                        <p><strong>2711</strong></p>
                    </Deneme>
                    </div>
                    <Sign signName='flame' />
                    <Text isVisible={this.state.hovering} text={'Deneme'} >
                        <p>içerik</p>
                    </Text>
                </Row>
            </Container>
        )
    }

}

export default Player;