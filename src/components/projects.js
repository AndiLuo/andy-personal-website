import React, { useState, useLayoutEffect } from "react";
import { Element } from 'react-scroll'
import {
  Jumbotron,
  Container,
  Row,
  Col,
  Image,
  Nav
} from "react-bootstrap";
import NavBar from './navbar'
import Zmage from "react-zmage";
import Scroll from 'react-scroll'
import Fade from "react-reveal";
import stack from './images/stack.gif'
import katana from './images/shoppingCart.gif'
import bg from './images/bloom.gif'
import { Hidden } from "@material-ui/core";



const backgroundDisplay ={
  backgroundColor: "white",
  backgroundRepeat: "no-repeat",
  background: `linear-gradient( rgba(0.9, 0.2, 0, 0.9), rgba(0, 0, 0, 0.9) ), url(${bg})`,
  backgroundAttachment: 'fixed',
  backgroundSize: "cover",
  backgroundPosition: "center",
  height:"100%",
  fontFamily:"Helvetica, sans-serif"

}

const jumboStyle = {

  fontFamily: "Helvetica, sans-serif",
  position:"relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  overflow: "hidden"
};

const projectData = [
  {
    "title": "Cardstagram",
    "image": stack,
    "url": 'https://cardstagram.netlify.app/',
    "description" : `A web application which allows the user to view, search for and create cards. Cards can be created through the usage of a form which contain the fields
    Title, Author, ImageURL, description and dimensions. After form submission, the data is logged in to the Mongo database and should be viewable/searchable
    on the main landing page of the application. Technologies used include MongoDB, React/Redux, Express, Node, and Apolloclient for routing. The backend is hosted on a heroku API and the client is available on a netlify.`
  },
  {
    "title": "Angular - Mr.Miyagi's Bazzar",
    "image": katana,
    "url": ''
  }
]




export default function Projects(props) {
  const Link = Scroll.Link

  const projects = projectData.map(function (projects) {
    return (
      <div className="columns portfolio-item">
        <div className="item-wrap">
          <Zmage alt={projects.title} src={projects.image} />
          <div style={{ textAlign: "center", fontSize:"1.4vw" }}>{projects.title}</div>
          <div style={{ textAlign: "center", fontSize:"1vw" }}><a href = {projects.url} >{projects.url}</a></div>
        </div>
      </div>
    );
  });

  return (
    <div style={backgroundDisplay}>
      <div style={{postion:"absolute"}}>
      <NavBar />
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <div style={jumboStyle}>
        <section id="portfolio">
          <Fade left duration={1000} distance="40px">
            <div className="row">
              <div className="twelve columns collapsed">
                <h1 style={{fontSize:"1.4vw"}}>Some of my works!</h1>

                <div
                  id="portfolio-wrapper"
                  className="bgrid-quarters s-bgrid-thirds cf"
                >
                  {projects}
                </div>
              </div>
            </div>
          </Fade>
        </section>

      </div>
    </div>
  )

}