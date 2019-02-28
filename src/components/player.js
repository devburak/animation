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
            time:10*60*59,
            start:false,
            hovering:false,
            signExplain: false,
        }
    }
    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 100);
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

        }), ()=> this.akis()
            
        );

        
      }

      akis = ()=>{
          if(this.state.time == 30){
              this.toggleDeneme()
          }
          if(this.state.time == 100){
              this.toggleSign()
          }
          if(this.state.time==170)
          this.init()
      }

      init=()=>{
          this.setState({ hovering:false,
            signExplain: false})
            this.toglleHandle()
      }

    stop=()=>{
        this.setState({start:false});
        clearInterval(this.interval);
    }
    start=()=>{
        this.setState({start:true});
        this.interval = setInterval(() => this.tick(), 100);
    }

    toglleHandle =()=>{
        if(this.state.start) this.setState({start:false})
        else this.setState({start:true})
    }
    
    toggleDeneme = ()=>{
        if(this.state.hovering) this.setState({hovering:false})
        else this.setState({hovering:true})
        this.setState({signExplain:false})
    }
    
    toggleSign = ()=>{
        if(this.state.signExplain) this.setState({signExplain:false})
        else this.setState({signExplain:true})
        this.setState({hovering:false})
    }

    time = ()=>{
        let {time} = this.state;
        var ss = (time % 100);
        var second = ("0" +  (Math.trunc(time / 10) % 60)).slice(-2)
        var minute = ("0" + (Math.trunc(time /600)%60)).slice(-2)
        var hour = Math.trunc(time /36000).toFixed(0)
        return(<p>{`${hour} : ${minute} : ${second} : ${ss}`}</p>)
    }

    render(){
        return (
            <Container>
                <Row>

                    <Button variant="outline-success" onClick={this.toglleHandle}>
                     { this.state.start ?  <i className="fas fa-pause"></i>  :   <i className="fas fa-play"></i> }
                    </Button>
                     <p>{this.time()}</p>
                </Row>
              
                    
                    <Row  style={{position:"relative"}}>
                    <Scene />
                    <div style={{
                        position: "absolute",
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
                    <div style={{
                        position: "absolute",
                        top:265,
                        left:155
                    }} > 
                    <Sign signName='flame'  onClick={this.toggleSign} clicked={this.state.signExplain}/>
                </div>
                </Row>
            </Container>
        )
    }

}

export default Player;