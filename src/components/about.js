import React, { useState, useLayoutEffect } from "react";
import { Element } from 'react-scroll'
import {
    Jumbotron,
    Container,
    Row,
    Col,
    Image
} from "react-bootstrap";
import andy from "./images/andy_2.jpg";

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
    
      const trueWidth = `${width}px`
      const trueHeight = `${height}px`

    return (
        <React.Fragment>
            <Element id='about' name="about">

            <div style={flexOne}>
        <div style={{ width: '75%', height: '40%' }}>
          <div style={centerImage}>
            <Image style={{ width: '27%', height: '95%' }} src={andy} roundedCircle />
            <div style={{ color: "white", marginTop: "-0.6%" }}>
              <p style={{ fontSize: "2vw" }}>Andy Luo</p>
            </div>
          </div>
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
        </div>
      </div>
    <br/>
    <br/>
        </Element>

        </React.Fragment>
    )

}