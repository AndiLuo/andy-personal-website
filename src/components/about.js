import React, { useState, useLayoutEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  Row,
  Col,
  Image
} from "react-bootstrap";
import NavBar from "./navbar"
import Slide from "react-reveal";
import SkillsBar from './skills'
import andy from "./images/andy_3.jpg"
import graybg from "./images/bloom.gif";
import andyLogo from "./images/andy_logo_white.png"
import './styles.css'



function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}



export default function About(props) {
  const [width, height] = useWindowSize()
  const trueWidth = `${width}px`
  const trueHeight = `${height}px`

  const history = useHistory()

  const redirectHome = () => {
    history.push('/')
    window.scrollTo(0, 0)
  }

  const centerImage = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "white",
  }

  const backgroundDisplay ={
    color: "white",
    backgroundColor: "white",
    backgroundRepeat: "no-repeat",
    background: `linear-gradient( rgba(0.9, 0.2, 0, 0.9), rgba(0, 0, 0, 0.9) ), url(${graybg})`,
    backgroundAttachment: 'fixed',
    backgroundSize: "cover",
    backgroundPosition: "center",
    height:"100vh"

  }

  const jumboStyle = {
    height:"70vh",
    width:"100%",
    fontFamily: "Helvetica, sans-serif",
    fontSize: "1vw",
    display: "flex",
    alignItems: "center",
   
    justifyContent: "center",
    textAlign: "center",
    overflow: "hidden"
  };

  const textFlex = {
  
  };


  return (
    <div style={backgroundDisplay}>
      <link rel="stylesheet" type="text/css" href="http://yui.yahooapis.com/3.18.1/build/cssreset/cssreset-min.css" />
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossorigin="anonymous"
      />
      <link href="https://fonts.googleapis.com/css?family=Comfortaa:300,400" rel="stylesheet" />
      <div>
        <div><NavBar /></div>
        <br/>
        <br/>
        <br/>
        <br/>
        <div >
          <Row style={{ color: "white" }} className="align-items-center">
            <Col xs={2} md={2} >
            </Col>
            <Col xs={5} md={4} style={{ marginTop: "2%" }}>
            <Slide left duration={500}>
              <div style={{ textAlign: "center", fontSize: "1vw", color: "white", borderBottom: "2px solid", }}>
                <p>
                  First and foremost, thank you for stopping by!
              </p>
                <p>
                  Currently, I'm looking for entry/junior level opportunities in development or IT.
              </p>
                <p>
                  I'm a recent graduate of BCITs Computer Science program, majoring in IT. Much of my education was distributed as mostly IT infrastructure technologies such as
                  database creation/management, cloud services, ADDS and DevOps. However, the other 40% was comprised of development courses utlizing languages such as Javascript, Python, SQL and some C.
                </p>
                <p>
                  As of now, I'm primarily focusing on expanding my full-stack development capabilities. I have created several small-medium projects utilizing different technologies but the MERN stack is what I'm most familiar with. Recently, I've been experimenting with GraphQL and ApolloClient, which I find very intuitive. However, I really want to learn all the different technologies this industry has to offer!
                </p>
              </div>
              <br/>
              
              <div style={centerImage}>
                <Image style={{ objectFit:"cover", width:"80%", height:"30vh"}} src={andy} rounded />
              </div>
              </Slide>
            </Col>
            <Col md={1}>
            </Col>
            
            <Col xs={1} md={1}  >
              <div>
                <SkillsBar/>
              </div>
            </Col>
          </Row>
        </div >
        <br/>
        <br/>

        {/* <div style={{ width: '60%', height: '2%' }}>
        <Row>
            <Col xs={5} >
            </Col>
            <Col xs={2} style={{ marginTop: "5px", width: { trueWidth }, height: { trueHeight } }} >
              <div style={centerImage}>
                <Image style={{ width: '140%', height: '95%' }} src={andy} rounded />
              </div>
            </Col>
            <Col xs={1} >
            </Col>
            <Col xs={1}  >
              <div style={{width:"1000%"}}>
                <SkillsBar/>
              </div>
            </Col>
            </Row>
        </div> */}
      </div>
    </div>
  )

}