import React,{ useState, useLayoutEffect} from "react";

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

function useWindowSize(){
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(()=> {
    function updateSize(){
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize',updateSize);
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
    backgroundAttachment:'fixed',
    backgroundSize: "autor",
    backgroundPosition:"center center",
    backgroundRepeat: 'no-repeat',
    height: {height},
    fontFamily: "Comfortaa",
    

  };



  //overflow-x css property deals with extra whitespace produced by "left" property here
  return (
    <div style={{backgroundColor:'Black', zoom: "0.5", height:{height}, width:{width}, overflowX:"hidden", overflowY:"hidden"}}>
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
            fontFamily:"Comfortaa",
          }}
        >
          <Navbar.Brand href="#home" style={{color:'white', fontSize:"200%"}}>Andy Luo's Site</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <ul>
            <Nav className="ml-auto">
              <NavDropdown style={{fontSize:"150%", top:"10px"}} class="navbar-nav ml-auto" title='Projects'> 
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
            <br/>
            <br/>
            <h1 style={{ fontSize: "350%" }}>Hi I'm Andy!</h1>
            <p style={{ fontSize: "200%" }}>
              BCIT Graduate - Web Dev - Information Technology
            </p>
            <div style={{display:'flex', flex:'1', flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
              <img src={require('./images/react.png')} style={{width:'8%', height:'8%', marginRight:"2%"}}/> 
              <img src={require('./images/node.png')} style={{width:'4%', height:'4%', marginRight:"2%"}}/>
              <img src={require('./images/mysql.png')} style={{width:'5%', height:'5%', marginRight:"2%"}}/>
              <img src={require('./images/python.png')} style={{width:'7%', height:'7%', marginRight:"2%"}}/>
              <img src={require('./images/mongo.jpg')} style={{width:'5%', height:'5%', marginRight:"2%"}}/>
              <img src={require('./images/amazon.png')} style={{width:'7%', height:'7%', marginRight:"2%"}}/>
              <img src={require('./images/agile.png')} style={{width:'5%', height:'5%', marginRight:"2%"}}/>
            </div>
          </Jumbotron>
        </div>
        <br/>
        <div style={{ position:'relative', display:'flex', minWidth:"5%", flexDirection:"row", left:'10%'}}>
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
          <div style={{ width: '100%', height: '100%'}}>
          <Image style={{ width: '40%', height: '95%'}} src={andy} roundedCircle/>
            <div class="flex-wrap" style={{color:"white", position:"relative"}}>
              <p style={{fontSize:"2vw"}}> Andy Luo</p>
            </div>
          </div>

          <Container style={{ position:'relative'}}>
          <Row>
            <Col xs={12} md={8}>
            <div style={{color:'white', border:'white'}}>
                yeshigh
            </div>
            </Col>
            <Col xs={6} md={4}>
              yes
            </Col>
          </Row>
          <Row>
            <div style={{color:'white', border:'white'}}>
            </div>
          </Row>
        </Container>
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
      </div>
    </div>
  );
}
