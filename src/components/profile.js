import React, { useState, useLayoutEffect } from "react";
import Projects from "./projects"
import About from "./about"
import Scroll from 'react-scroll'
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import {
  Jumbotron,
  Container,
  Row,
  Col,
  Image,
} from "react-bootstrap";
import "./styles.css";
import graybg from "./images/graybg.png"
import geo from "./images/thomas.gif";
import andyLogo from "./images/andy_logo_white.png"


const styles = {
  root: {
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
        borderColor: "green",
        fontFamily:"Consolas"
      },
  },
  input: {
    color: "white",
    fontSize:"1vw",
    fontFamily:"Consolas"
  }
};

const Link = Scroll.Link


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


export default function Profile(props) {
  const [width, height] = useWindowSize()

  const history = useHistory()

  const redirectAbout = () => {
    history.push('/about/')
    window.scrollTo(0,0)
  }

  const jumboStyle = {
    color: "white",
    backgroundColor: "white",
    backgroundRepeat:"no-repeat",
    //backgroundattachment: fixed = image scroll dissapears as you scroll!s
    background:`linear-gradient( rgba(0.5, 0.2, 0, 0.6), rgba(0, 0, 0, 0.6) ), url(${geo})`,
    backgroundAttachment: 'fixed',
    backgroundSize: "cover",
    backgroundPosition:"center",
    maxheight:"-webkit-fill-available",
    height: "100vh",
    fontFamily: "Consolas",
    fontSize: "1vw",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  };

  const centerImage = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderTop: "2px solid",
    color: "white"
  }

  const flexOne = {
    alignItems: "stretch",
    position: 'relative',
    display: 'flex',
    minWidth: "5%",
    flexDirection: "row",
    justifyContent: "center",
    flex: "1",
    fontFamily: "Consolas"
  }

  const button = {
    fontFamily: "Consolas", borderColor:"white", fontSize:"1vw", color:"white"
  }

  const trueWidth = `${width}px`
  const trueHeight = `${height}px`


  //overflow-x css property deals with extra whitespace produced by "left" property here
  return (
    <div style={{ background: `url(${graybg}` , overflowX: "hidden", overflowY: "hidden" }}>
    <link rel="stylesheet" type="text/css" href="http://yui.yahooapis.com/3.18.1/build/cssreset/cssreset-min.css"/>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossorigin="anonymous"
      />
      <link href="https://fonts.googleapis.com/css?family=Comfortaa:300,400" rel="stylesheet"></link>
      <div>
        <Jumbotron style={jumboStyle}>
          <br />
          <br />
          <div style={{ textAlign: "center" }}>
            <div>
              <Image style={{ width: '31%', height: '95%' }} src={andyLogo} />
            </div>
            <br/>
            <h1 style={{ fontSize: "200%"}}>Hi I'm Andy</h1>
            <div>
              <p style={{ fontSize: "150%" }}>
                BCIT Graduate - Full-Stack Dev - Information Technology
                </p>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
            <img src={require('./images/react.png')} style={{ width: '10%', height: '60%', marginRight: "2%" }} />
            <img src={require('./images/node.png')} style={{ width: '4%', height: '70%', marginRight: "2%" }} />
            <img src={require('./images/angular.png')} style={{ width: '5%', height: '90%', marginRight: "2%" }} />
            <img src={require('./images/mysql.png')} style={{ width: '5%', height: '80%', marginRight: "2%" }} />
            <img src={require('./images/python.png')} style={{ width: '6%', height: '70%', marginRight: "2%" }} />
            <img src={require('./images/mongo.jpg')} style={{ width: '4%', height: '70%', marginRight: "2%" }} />
            <img src={require('./images/amazon.png')} style={{ width: '6%', height: '70%', marginRight: "2%" }} />
            <img src={require('./images/agile.png')} style={{ width: '6%', height: '80%' }} />
          </div>
          <div>
              <Button onClick= {redirectAbout} variant="outlined" color="primary" style={button}>
                About Me
              </Button>
              
              |
              <Button variant="outlined" color="primary" style={button}>
              <Link activeClass ="projects" to="projects" spy={true} smooth={true} duration={500}>
                Projects
              </Link>
              </Button>
              |
              <Button onClick = {() => window.open('https://github.com/AndiLuo', "_blank")} variant="outlined" color="primary" style={button}>
              GitHub
              </Button>
              
          </div>
          
        </Jumbotron>
      </div>
    <br/>
    <Projects/>
    </div>
  );
}
