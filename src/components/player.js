import React from 'react';
import {Button, Container,Row,Col,ButtonToolbar} from 'react-bootstrap';


class Player extends React.Component{

    constructor(props){
        super(props);
        this.state={
            time:0,
            start:false
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
    render(){
        return (
            <Container>
                <Row>

                    <Button variant="outline-success" onClick={this.toglleHandle}>
        { this.state.start ?  <i class="fas fa-pause"></i>  :   <i class="fas fa-play"></i> }
                    </Button>
                <p>{this.state.time}</p>
                </Row>
            </Container>
        )
    }

}

export default Player;