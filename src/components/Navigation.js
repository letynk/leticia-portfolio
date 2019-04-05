
          
import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

class Navigation extends React.Component{

  render(){

    return(
        
          <div>
                <Nav id = "navigation" className="justify-content-center" activeKey="/home">
                <Nav.Item>

                 <Link to="/aboutme"><b>About Me</b></Link>   
                  <Nav.Link><Link to ="/home">Home</Link></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-1">About</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="disabled">Contact</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                 
                </Nav.Item>
              </Nav>

          </div>
        
      );
  }
}
export default Navigation;