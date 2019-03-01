import React from 'react';
import {Button, Container,Row,Col,ButtonToolbar} from 'react-bootstrap';
import Scene from './scene';
import styled from "styled-components";
import Deneme from './deneme';
import Sign from './warningSign';
import Text from './text';
import Screen from './screen';
import HoverVisible from './hoverVisible';
import CharDiv from './charWithDiv';
import ShiftX from './shiftX';
import posed from "react-pose";
import { color } from 'style-value-types';

const StyledP = styled.p` 
    border-bottom: solid 4px;
    margin-bottom:0px;
  `;

  const P = ({ className, children , style }) => (
    <p className={className} style={{style}}>
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
            turuncuTabelainfo:false,
            finish:false
            
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
          if(this.state.time==10){
            this.setState({screenOpen:false})
          }
          if(this.state.time == 40){
              this.toggleDeneme()
          }
          if(this.state.time == 110){
              this.toggleSign()
          }
          if(this.state.time==180){
            this.toggleSign()
          }
          if(this.state.time==195){
           
            this.setState({screenOpen:true,bolumHeader:'BÖLÜM II'})
          }
          if(this.state.time==220){
              this.setState({screenOpen:false,bolum:2})
          }
          if(this.state.time==240){
            
            this.setState({turuncuTabelainfo:true})
          }
          if(this.state.time>=590){
            this.setState({screenOpen:true,bolumHeader:'BİTTİ'})
            this.init()

          }
         

      }

      init=()=>{
          this.setState({ hovering:false,
            signExplain: false,
            finish:true,
            bolumHeader: 'BÖLÜM I',
            bolum:1,
        })
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
        if(this.state.finish) { return this.setState({finish:false,time:0, start:true}) }
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
                        { this.state.finish? <i class="fas fa-redo"></i> :  this.state.start ? <i className="fas fa-pause"></i> : <i className="fas fa-play"></i>}
                    </Button>
                    </Col>
                    <Col sm={4}>
                    {this.time()}
                    </Col>
                    </HoverVisible>
                </Row>

                <Row style={{position: "relative"}} >
                <Screen isOpen={this.state.screenOpen} text={this.state.bolumHeader} >
                    </Screen>
                    <div style={this.state.bolum == 1 ? { visibility: "unset" } : { visibility: "hidden" }}>
                        <Scene />
                        <div style={{
                            position: "absolute",
                            left: 111,
                            top: 20
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
                    <div style={this.state.bolum == 2 ? { visibility: "unset" } : { visibility: "hidden" }}>
                        <ShiftX pose={this.state.time==250?"left":"null"} unit={300}>
                            <Text isVisible={true} className="box">
                                <h3>TURUNCU RENKLİ PLAKA</h3>
                            </Text>
                            <CharDiv isOpen={this.state.turuncuTabelainfo}>
                                <div className="turuncu-tabela" style={{ margin: "0 auto" }}>
                                    <StyledP style={ this.state.time>270 && this.state.time<450 ? {backgroundColor:"red"}:{backgroundColor:"orange"}}><strong>33</strong></StyledP> 
                                    <p style={this.state.time>500 && this.state.time <590 ? {backgroundColor:"red"}:{backgroundColor:"orange"}}><strong>2711</strong></p>                                   
                                </div>
                            </CharDiv>
                        </ShiftX>
                        <CharDiv isOpen={ this.state.time>269 && this.state.time<390 } className="infobox">
                            <p><strong>Tabelanın ilk satırını "tehlike tanımlama numaraları" oluşturur.</strong> Tehlike tanımlama numaraları iki veya üç rakamdan oluşur.</p>
                            <p>Genel olarak rakamlar aşağıdaki tehlikeleri ifade eder:</p>
                            <p>2 Basınç veya kimyasal reaksiyondan kaynaklanan gaz emisyonu</p>
                            <p>3 Sıvıların (buharların) ve gazların ya da kendiliğinden ısınan sıvıların alevlenebilirliği</p>
                            <p>4 Katıların veya kendiliğinden ısınan katıların alevlenebilirliği</p>
                            <p>5 Yükseltgen (yangın yoğunlaştırıcı) etki </p>
                            <p>6 Zehirlilik veya enfeksiyon riski </p>
                            <p>7 Radyoaktivite</p>
                            <p>8 Aşındırıcılık</p>
                            <p>9 Ani tehlikeli reaksiyon riski</p>
                        </CharDiv>
                        <CharDiv isOpen={this.state.time > 395 && this.state.time < 449} className="infobox">
                            <p>Tehlike tanımlama numarasının önüne <strong>"X"</strong> harfinin gelmesi, maddenin su ile tehlikeli şekilde tepkimeye
                                gireceği anlamına gelir. Bu tür maddeler için su, yalnızca uzmanlar tarafından onay verildiğinde 
                                kullanılabilir.</p>
                            
                        </CharDiv>
                        <CharDiv isOpen={this.state.time > 420 && this.state.time < 490} >
                        <ShiftX pose={this.state.time==450?"left":"null"} unit={325} initX={300} initY={-81} >
                                {this.state.time<451 ? <h1>X</h1>:<strong><p style={{fontSize:"x-Large",color:"red"}}>X</p></strong>}
                            </ShiftX>
                        </CharDiv>    
                        <CharDiv isOpen={ this.state.time>500 && this.state.time<590 } className="infobox">
                            <p><strong>Tabelanın ikinci satırını "UNnumaraları" oluşturur.</strong> UN tanımlama numaraları dört rakamdan oluşur.</p>
                            <p>Tehlikeli Maddelerin guvenli bir sekilde taşınması ve saklanması amacı ile Birleşmiş Milletler Uzmanlar Komitesi tarafından belirlenmis bir kodlama sistemidir.</p>
                            
                        </CharDiv>       
                        
                    </div>

                </Row>
            </Container>
        )
    }

}

export default Player;