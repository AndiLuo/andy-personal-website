import React, { useState, useLayoutEffect } from "react";

import Button from "@material-ui/core/Button";
import {
  Jumbotron,
  Card,
  Form,
  Navbar,
  Nav,
  NavDropdown,
  FormControl,
  Carousel,
  Container,
  Row,
  Col,
  Image
} from "react-bootstrap";

import "./styles.css";
import mountain from "./images/patrick-fore.jpg";
import andy from "./images/andy.jpg";

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

  const images = {
    node: require('./images/node.png'),
    react: require('./images/react.png')
  }



  const jumboStyle = {
    color: "white",
    backgroundImage: `url(${mountain}) `,
    //backgroundattachment: fixed = image scroll dissapears as you scroll!
    backgroundAttachment: 'fixed',
    backgroundSize: "autor",
    backgroundPosition: "center center",
    backgroundRepeat: 'no-repeat',
    height: "100vh",
    fontFamily: "Consolas",
    fontSize: "1vw",
    display: "flex",
    position: "relative",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center"
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

  const trueWidth = `${width}px`
  const trueHeight = `${height}px`


  //overflow-x css property deals with extra whitespace produced by "left" property here
  return (
    <div style={{ backgroundColor: 'Black', zoom: "0.5", height: { height }, width: { width }, overflowX: "hidden", overflowY: "hidden" }}>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossorigin="anonymous"
      />
      <link href="https://fonts.googleapis.com/css?family=Comfortaa:300,400" rel="stylesheet"></link>
      <div>
        {/* <div>
        <Navbar
          bg="transparent"
          fixed="top"
          expand="md"
          scrolling
          collapseOnSelect
          style={{
            fontFamily: "Consolas",
            fontSize:"1vw",
            color:"White"
          }}
        >

          <Navbar.Toggle aria-controls="responsive-navabar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <ul>
              <Nav className="ml-auto">
                <NavDropdown style={{ fontSize: "150%", top: "10px" }} class="navbar-nav ml-auto" title='Projects'>
                  <NavDropdown.Item style={{fontSize: "1.2vw"}}>
                    MERN Card Database
                </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </ul>
          </Navbar.Collapse>
        </Navbar>
      </div> */}
        <Jumbotron style={jumboStyle}>
          <br />
          <br />
          <div stlye={{ textAlign: "center" }}>
            <h1 style={{ fontSize: "350%", height: { trueHeight }, width: { trueWidth } }}>Hi I'm Andy!</h1>
            <div>
              <p style={{ fontSize: "130%" }}>
                BCIT Graduate - Full-Stack Dev - Information Technology
                </p>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
            <img src={require('./images/react.png')} style={{ width: '10%', height: '60%', marginRight: "2%" }} />
            <img src={require('./images/node.png')} style={{ width: '4%', height: '70%', marginRight: "2%" }} />
            <img src={require('./images/mysql.png')} style={{ width: '5%', height: '70%', marginRight: "2%" }} />
            <img src={require('./images/python.png')} style={{ width: '6%', height: '70%', marginRight: "2%" }} />
            <img src={require('./images/mongo.jpg')} style={{ width: '4%', height: '70%', marginRight: "2%" }} />
            <img src={require('./images/amazon.png')} style={{ width: '6%', height: '70%', marginRight: "2%" }} />
            <img src={require('./images/agile.png')} style={{ width: '6%', height: '80%' }} />
          </div>
        </Jumbotron>
      </div>
      <br />
      <div style={flexOne}>
        <div style={{ width: '75%', height: '40%' }}>
          <div style={centerImage}>
            <Image style={{ width: '27%', height: '95%' }} src={andy} roundedCircle />
            <div style={{ color: "white", marginTop: "-0.6%" }}>
              <p style={{ fontSize: "2vw" }}>Andy Luo</p>
            </div>
          </div>
          <div style={{ textAlign: "center", fontSize: "1.2vw", color: "white", borderBottom: "2px solid", }}>
            <p>
              First and foremost, thank you for stopping by!
              </p>
            <p>
              Currently, I'm looking for entry/junior level oppurtunuties in development or IT.
              </p>
            <p>
              I'm a recent graduate of BCITs Computer Science program who majored in IT. Much of my education was distrubted as 60% IT infrastructure technologies such as
              database creation/management, cloud services, ADDS and DevOps. However, the other 40% was comprised of development courses utlizing languages such as Javascript, Python, SQL and some C.
                </p>
            <p>
              As of now, I'm primarily focusing on expanding my full-stack development capabilities. I have created several small-medium projects utilizing different stacks ute MERN is what I'm most familiar with. However, I really want to learn all the different technologies this industry has to offer!
              I've been experimenting with GraphQL and ApolloClient recently which I find very intuitive.
                </p>
          </div>
        </div>
      </div>


      {/* <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src= {stars}
              alt="First slide"
            />
          </Carousel.Item>
        </Carousel> */}
      {/* <Card border="primary" style={{ width: '20%', height: '20%', left:'5%', backgroundColor:'black'}} bg="Secondary">
            <Card.Img
              variant="top"
              style={{ width: {width}, height: {height}}}
              src={andy}
              roundedCircle
            />
            <Card.Body style={{ color: "white", fontSize: "100%"  }}>
              <Card.Title>Andy Luo</Card.Title>
              <Card.Text>
                Hey there! I'm a recent graduate from BCITs Comp Sci program. I was educated in many different fields which range from development, cloud services, Agile methadologies and VMs.
              </Card.Text>
            </Card.Body>
          </Card> */}
    <br/>
    <br/>
    <div style={flexOne}>
      <div>
        <p style={{ fontSize: "2.2vw", color:"white" }}>Personal Projects</p>
      </div>
    </div>
    <br/>
    <Row style={{color:"white", fontFamily:"Consolas"}}>
      <Col xs={6} md={1}>
      </Col>
      <Col xs={6} md={4}>
        <p style={{fontSize:"1.4vw", borderBottom:"1px solid"}}>Cardstagram (MERN stack application)</p>
        <p style={{fontSize:"1vw"}}>
        A web application which allows the user to view, search for and create cards. Cards can be created through the usage of a form which contain the fields 
        Title, Author, ImageURL, description and dimensions. After form submission, the data is logged in to the Mongo database and should be viewable/searchable 
        on the main landing page of the application. Technologies used include MongoDB, React/Redux, Express, Node, and Apolloclient for routing.
        </p>
      </Col>
    </Row>
    </div>
  );
}
