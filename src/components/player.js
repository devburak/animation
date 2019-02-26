import React from 'react';
import {Button, Container,Row,Col,ButtonToolbar} from 'react-bootstrap';


class Player extends React.Component{

    constructor(props){
        super(props);
 
    }

    clickHandle =(event)=>{
        console.log(event)
    }

    render(){
        return (
            <Container>
                <Row>
                    
                        <Button variant="outline-success" onClick={this.clickHandle}>
                        <i class="fas fa-play"></i> 
                 </Button>
                   
                </Row>
            </Container>
        )
    }

}

export default Player;