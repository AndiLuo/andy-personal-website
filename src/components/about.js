import React, { useState, useLayoutEffect } from "react";
import { useHistory } from "react-router-dom";
import { Element } from 'react-scroll'
import Button from '@material-ui/core/Button';
import {
  Jumbotron,
  Container,
  Row,
  Col,
  Image
} from "react-bootstrap";
import andy from "./images/andy_2.jpg";
import graybg from "./images/graybg.png";
import andyLogo from "./images/andy_logo_white.png"



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
    window.scrollTo(0,0)
  }
  const centerImage = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "white"
  }

  const flexOne = {
    display: 'flex',
    flexDirection: "column",
    flex: "1",
    fontFamily: "Consolas",
    alignItems: "center",
    justifyContent: "center",
    maxheight: "-webkit-fill-available",
    textAlign: "center"
  }

  // const styles = {
  //   backgroundSize: "cover",
  //   maxheight: "-webkit-fill-available",
  //   fontFamily: "Consolas",
  //   fontSize: "1vw",
  //   display: "flex",
  //   alignItems: "center",
  //   flexDirection: "column",
  //   justifyContent: "center",
  //   textAlign: "center",
  //   flex: "1",
  //   flexShrink: "0"
  // }
  const jumboStyle = {
    color: "white",
    maxheight: "-webkit-fill-available",
    fontFamily: "Consolas",
    fontSize: "1.2vw",
    display: "flex",
    height: "50%",
    alignItems: "center",
    flexDirection: "column",
    flex: "1",
    textAlign: "center",
    height: "100vh"

  };

  const button = {
    fontFamily: "Consolas", borderColor: "white", fontSize: "1vw", color: "white"
  }


  return (
    <div style={{ position: "relative", height: "100%", backgroundSize: "100%", background: `url(${graybg})`, overflowX: "hidden", overflowY: "hidden" }}>
      <link rel="stylesheet" type="text/css" href="http://yui.yahooapis.com/3.18.1/build/cssreset/cssreset-min.css" />
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossorigin="anonymous"
      />
      <link href="https://fonts.googleapis.com/css?family=Comfortaa:300,400" rel="stylesheet"></link>
      <br/>
      <div style={flexOne}>
        <div>
          <Image style={{ width: '100%', height: '95%' }} src={andyLogo} />
        </div>
        <br/>
        <div>
          <Button variant="outlined" onClick={redirectHome} color="primary" style={button}>
            Home
          </Button>
          |
          <Button variant="outlined" onClick={() => window.open('https://github.com/AndiLuo')} color="primary" style={button}>
            GitHub
          </Button>
          </div>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div style={jumboStyle}>
        <div style={{ width: '75%', height: '40%' }}>
          <Row style={{ color: "white", fontFamily: "Consolas" }} className="align-items-center">
            <Col xs={1} >
            </Col>
            <Col xs={2} style={{ marginTop: "5px", width: { trueWidth }, height: { trueHeight } }} >
              <div style={centerImage}>
                <Image style={{ width: '140%', height: '95%' }} src={andy} roundedCircle />
                <div style={{ color: "white", marginTop: "-0.6%" }}>
                  <p style={{ fontSize: "2vw" }}>Andy Luo</p>
                </div>
              </div>
            </Col>
            <Col xs={2} style={{ height: "100%" }}></Col>
            <Col xs={7} style={{ marginTop: "5px" }}>
            <div style={{ textAlign: "center", fontSize: "1.1vw", color: "white", borderBottom: "2px solid", }}>
          <p>
            First and foremost, thank you for stopping by!
              </p>
          <p>
            Currently, I'm looking for entry/junior level opportunities in development or IT.
              </p>
          <p>
            I'm a recent graduate of BCITs Computer Science program, majoring in IT. Much of my education was distributed as 60% IT infrastructure technologies such as
            database creation/management, cloud services, ADDS and DevOps. However, the other 40% was comprised of development courses utlizing languages such as Javascript, Python, SQL and some C.
                </p>
          <p>
            As of now, I'm primarily focusing on expanding my full-stack development capabilities. I have created several small-medium projects utilizing different technologies but the MERN stack is what I'm most familiar with. Recently, I've been experimenting with GraphQL and ApolloClient, which I find very intuitive. However, I really want to learn all the different technologies this industry has to offer!
                </p>
        </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  )

}