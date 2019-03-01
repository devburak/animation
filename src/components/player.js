import React from 'react';
import {Button, Container,Row,Col,ButtonToolbar} from 'react-bootstrap';
import Scene from './scene';
import styled from "styled-components";
import Deneme from './deneme';
import Sign from './warningSign';
import Text from './text';
import Screen from './screen';
import HoverVisible from './hoverVisible';

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
            hovering:false,
            signExplain: false,
            screenOpen : true,
            playerNav:false,
            bolumHeader: 'BÖLÜM I',
            bolum:1,
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
          if(this.state.time==0){
              this.setState({screenOpen:true})
          }
          if(this.state.time==3){
            this.setState({screenOpen:false})
          }
          if(this.state.time == 50){
              this.toggleDeneme()
          }
          if(this.state.time == 110){
              this.toggleSign()
          }
          if(this.state.time==190){
            this.setState({screenOpen:true,bolumHeader:'BÖLÜM II', bolum:2})
          }
          if(this.state.time==196)
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

    screenToogle = ()=>{
        if(this.state.screenOpen) this.setState({screenOpen:false})
        else this.setState({screenOpen:true})
    }

    render(){
        return (
            <Container onMouseOver={()=>this.setState({playerNav:true})} onMouseOut={()=>this.setState({playerNav:false})}>
                <Row className="player-nav">
                    <HoverVisible isOpen={this.state.playerNav}>
                   
                    <Col sm={4}>
                    <p>{this.state.bolumHeader}</p>
                    </Col>
                    <Col sm={4}>
                    <Button variant="outline-success" onClick={this.toglleHandle}>
                        {this.state.start ? <i className="fas fa-pause"></i> : <i className="fas fa-play"></i>}
                    </Button>
                    </Col>
                    <Col sm={4}>
                    <p>{this.time()}</p>
                    </Col>
                    </HoverVisible>
                </Row>

                <Row style={{position: "relative"}} >
                <Screen isOpen={this.state.screenOpen} text={this.state.bolumHeader} >
                    </Screen>
                    <div style={this.state.bolum==1?{visibility:"unset"}:{visibility:"hidden"}}>
                    <Scene />
                        <div style={{
                            position: "absolute",
                            left: 111,
                            top:20
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
                            top: 265,
                            left: 155
                        }} >
                            <Sign signName='flame' onClick={this.toggleSign} clicked={this.state.signExplain} />
                        </div>   
                        </div>

                </Row>
            </Container>
        )
    }

}

export default Player;