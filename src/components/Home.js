          
import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
class Home extends React.Component{

  render(){

    return(
          <div>
          <Row > {/*home*/}
              <Col md={2}>

              </Col>
               <Col md={8} >
                <Card id ="homecard">
                  <h3>< p className="hometext">Hi there! </p></h3>
                  <h3><p className="hometext">My name is leticia, I am a software developer who loves travelling, reading books
                  and hanging out with family and friends. </p></h3>
                    <h3>< p className="hometext">Welcome t my portfolio :-) </p></h3>

                </Card>

              </Col>
              <Col md={2}>

              </Col>
            </Row>
        </div>




      );
  }
}
export default Home;