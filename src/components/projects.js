import React, { useState, useLayoutEffect } from "react";
import { Element } from 'react-scroll'
import {
    Jumbotron,
    Container,
    Row,
    Col,
    Image
} from "react-bootstrap";


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


export default function Projects(props) {
    const [width, height] = useWindowSize()
    const trueWidth = `${width}px`
    const trueHeight = `${height}px`

    return (
        <React.Fragment>
            <Element id='projects' name="projects">

                <div>
                    <div style={flexOne}>
                        <div>
                            <p style={{ fontSize: "2.2vw", color: "white" }}>Personal Projects</p>
                        </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                        <Row style={{ color: "white", fontFamily: "Consolas" }} className="align-items-center">
                            <Col xs={1} >
                            </Col>
                            <Col xs={5} style={{ marginTop: "5px" }}>
                                <p style={{ fontSize: "1.4vw", borderBottom: "1px solid" }}>Cardstagram (MERN stack application)</p>
                                <p style={{ fontSize: "1.1vw" }}>
                                    A web application which allows the user to view, search for and create cards. Cards can be created through the usage of a form which contain the fields
                                    Title, Author, ImageURL, description and dimensions. After form submission, the data is logged in to the Mongo database and should be viewable/searchable
                                    on the main landing page of the application. Technologies used include MongoDB, React/Redux, Express, Node, and Apolloclient for routing. The backend is hosted on a heroku API and the client is available on a netlify.
                        </p>
                                <a href="https://cardstagram.netlify.app/" target="_blank" style={{ borderBottom: "1px solid", fontSize: "1.4vw" }}>
                                    Link to project
                        </a>
                                
                            </Col>
                            <Col xs={1}></Col>
                            <Col xsOffSet={2} xs={1}>
                                <img src={require('./images/mern.gif')} style={{ width: '500%', height: '1000%' }} />
                            </Col>
                        </Row>
                    </div>
                    <br />
                    <br />
                    <Row style={{ color: "white", fontFamily: "Consolas" }} className="align-items-center">
                        <Col xs={1} >
                        </Col>
                        <Col xs={1} style={{ marginTop: "5px", width: { trueWidth }, height: { trueHeight } }} >
                            <img src={require('./images/shoppingCart.gif')} style={{ minWidth: "200%", width: '500%', height: '1000%' }} />
                        </Col>
                        <Col xs={4} style={{ height: "100%" }}></Col>
                        <Col xs={5} style={{ marginTop: "5px" }}>
                            <p style={{ fontSize: "1.4vw", borderBottom: "1px solid" }}>Mr.Miyagi's Katana Store (Angular Shopping Cart)</p>
                            <p style={{ fontSize: "1.1vw" }}>
                                An angular web application which allows you to shop for swords! This app includes: a form for inputing your shipping details (includes required fields), a dropdown containing the available items for sale
                                + quantity indication and order details displaying your shipping info, sub-total, applicable taxes and grand total. You are able to delete items from the order details and the price gets updated.
                    </p>
                            <a style={{ borderBottom: "1px solid", fontSize: "1.4vw" }}>
                            </a>
                        </Col>
                    </Row>
                    <br />

                </div>
            </Element>

        </React.Fragment>
    )

}