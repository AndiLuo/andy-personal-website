import React, { useState, useLayoutEffect } from "react";
import Scroll from 'react-scroll'
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";
import {Jumbotron, Image} from "react-bootstrap";
import "./styles.css";
import geo from "./images/thomas.gif";
import andyLogo from "./images/andy_logo_white.png"
import NavBar from "./navbar"
import SkillsBar from './skills'
import Slide from "react-reveal";


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


  const jumboStyle = {
    color: "white",
    backgroundColor: "white",
    backgroundRepeat:"no-repeat",
    //backgroundattachment: fixed = image scroll dissapears as you scroll!s
    background:`linear-gradient( rgba(0.8, 0.2, 0, 0.8), rgba(0, 0, 0, 0.8) ), url(${geo})`,
    backgroundAttachment: 'fixed',
    backgroundSize: "cover",
    backgroundPosition:"center",
    maxheight:"-webkit-fill-available",
    height: "100vh",
    fontFamily: "Helvetica, sans-serif",
    fontSize: "1vw",
    letterSpacing:"2px",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    overflow:"hidden"
  };

 
  const button = {
    fontFamily: "Consolas", borderColor:"white", fontSize:"1vw", color:"white"
  }

  //overflow-x css property deals with extra whitespace produced by "left" property here
  return (
    <div style={jumboStyle}>
    
      <div style={{justifyContent:"center"}}>
        <NavBar/>
        <Jumbotron style={jumboStyle}>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
      <Slide down duration={1000}>
          <div style={{ textAlign: "center" }}>  
            <div>
              <Image style={{ width: '31%', height: '95%' }} src={andyLogo} />
            </div>
            <br/>
            <h1 style={{ fontSize: "200%"}}>Hi I'm Andy</h1>
            <div>
              <p style={{ fontSize: "150%" }}>
               Full-Stack Dev - Information Technology
                </p>
            </div>
          </div>
          </Slide>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
            <img src={require('./images/Black.png')} style={{ width: '10%', height: '60%', marginRight: "2%" }} />
            <img src={require('./images/Black.png')} style={{ width: '4%', height: '70%', marginRight: "2%" }} />
            <img src={require('./images/Black.png')} style={{ width: '5%', height: '90%', marginRight: "2%" }} />
            <img src={require('./images/Black.png')} style={{ width: '5%', height: '90%', marginRight: "2%" }} />
            
         
          </div>
        </Jumbotron>
      </div>

    </div>
  );
}
