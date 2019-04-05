
          
import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

class About extends React.Component{

  render(){

    return(
          
            <div> {/*About*/}
            
                <h3 id = "aboutheader"><p>About  </p></h3>   

                  <Card id = "aboutcard">
                     <Row> 
                     <Col md={6}>
                            <h4 className="aboutcontent"><p> Qualifications </p></h4> 

                              <h5><p>Msc. Software Engineering</p></h5>
                              <h5><p>Bsc. Software Engineering</p></h5>
                              <h5><p>Openclassroom Certificate</p></h5>
                     
                     </Col>

                      <Col md={6}>
                            <h4 className="aboutcontent"><p> Tools </p></h4> 
                              <h5><p>Frameworks: Laravel, React, Angular</p></h5>
                              <h5><p>Language: Php, Java, Javascript</p></h5>
                              <h5><p>Others: MongoDB, NPM, Node.js</p></h5>
                     
                     </Col>

                      
                     </Row>
                  </Card>
                
              
            </div>




      );
  }
}
export default About;