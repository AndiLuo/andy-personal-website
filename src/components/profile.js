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
    height: { height },
    fontFamily: "Comfortaa",
    fontSize: "1vw"
  };

  const centerImage = {
    display:"flex", flexDirection:"column", alignItems:"center"

  }

  const trueWidth = `${width}px`

  console.log(trueWidth)

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
        <Navbar
          bg="dark"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            fontFamily: "Comfortaa",
          }}
        >
          <Navbar.Brand href="#home" style={{ color: 'white', fontSize: "200%" }}>Andy Luo's Site</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <ul>
              <Nav className="ml-auto">
                <NavDropdown style={{ fontSize: "150%", top: "10px" }} class="navbar-nav ml-auto" title='Projects'>
                  <NavDropdown.Item>
                    MERN Card Database
                </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </ul>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <div>
        <div align="center">
          <Jumbotron style={jumboStyle}>
            <br />
            <br />
            <h1 style={{ fontSize: "350%" }}>Hi I'm Andy!</h1>
            <p style={{ fontSize: "200%" }}>
              BCIT Graduate - Web Dev - Information Technology
            </p>
            <div style={{ display: 'flex', flex: '1', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
              <img src={require('./images/react.png')} style={{ width: '8%', height: '8%', marginRight: "2%" }} />
              <img src={require('./images/node.png')} style={{ width: '4%', height: '4%', marginRight: "2%" }} />
              <img src={require('./images/mysql.png')} style={{ width: '5%', height: '5%', marginRight: "2%" }} />
              <img src={require('./images/python.png')} style={{ width: '7%', height: '7%', marginRight: "2%" }} />
              <img src={require('./images/mongo.jpg')} style={{ width: '5%', height: '5%', marginRight: "2%" }} />
              <img src={require('./images/amazon.png')} style={{ width: '7%', height: '7%', marginRight: "2%" }} />
              <img src={require('./images/agile.png')} style={{ width: '5%', height: '5%', marginRight: "2%" }} />
            </div>
          </Jumbotron>
        </div>
        <br />
        <div style={{ position: 'relative', display: 'flex', minWidth: "5%", flexDirection: "row", justifyContent: "center"}}>
          <div style={{ width: '40%', height: '40%', fontFamily:"comfortaa", flexDirection: "column"}}>
            <div style={centerImage}>
            <Image style={{ width: '40%', height: '95%' }} src={andy} roundedCircle />
              <div style={{ color: "white", margin: "10%", marginTop: "-0.6%" }}>
                <p style={{ fontSize: "2vw" }}>Andy Luo</p>
              </div>
            </div>
            <div style={{ position: 'relative'}}>
              <Row style={{ fontSize: "1vw", width: { width } }}>
                <Col style={{ color: 'white', border: 'white', borderTop: "1px solid", borderBottom: "1px solid", textAlign: "center" }}>
                  <p>
                    First and foremost, thank you for stopping by!
                </p>
                  <p>
                    I'm a recent graduate of BCITs Computer Science program who majored in IT. Much of my education was distrubted as 60% IT infrastructure technologies such as
                    database creation/management, cloud services, ADDS and DevOps. However, the other 40% was comprised of development courses utlizing languages such as Javascript, Python, SQL and some C.
                </p>
                  <p>
                    As of now, I'm primarily focusing on expanding my full-stack development capabilities. I have created several small-medium projects utilizing the MERN stack which is what I'm most familiar with. However, really want to learn all the different technologies this industry has to offer!
                    I've been experimenting with GraphQL and ApolloClient recently which I find very intuitive.
                </p>
                </Col>
              </Row>
            </div>
          </div>
        </div>
        DSLKAJDKLSAJDLKSJADKL

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
      </div>
    </div>
  );
}
