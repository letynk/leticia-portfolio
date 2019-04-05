
          
import React from 'react';
import photo from './photo.PNG';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';

class Contact extends React.Component{

  render(){

    return(
           
            <div> {/*Contact*/}
              <Row> 
                  <Col md={12} id = "aboutheader" >
                    <p><h3 >Contact</h3></p>
                  </Col>  
              </Row>

              <Row>
                <Col md={2} >
                   
                </Col>

                <Col md={8}>
                  <Card id="contactcard">

                    <Row>
                      <Col md= {4}>
                        <Image id ="cardphoto" src ={photo} fluid/> 
                      </Col>
                       <Col md= {8}>
                             <h5><p><strong>Email: </strong> leticia.nkulu@gmail.com</p></h5>
                             

                              <h5><p><strong>Twitter:</strong> @leticiankulu</p></h5>
                              

                              <h5><p><strong>LinkedIn:</strong>leticiankulu  </p></h5>
                       

                              <h5><p><strong>Mobile No: </strong> +60169709806 </p></h5>
                              

                      </Col>

                    </Row>
                 
                  </Card>
                </Col>

                <Col md={2}>
              
                </Col>
              </Row>
            </div>




      );
  }
}
export default Contact;