import React from 'react'
import { ProgressBar } from "react-bootstrap"
import Slide from "react-reveal";
import './styles.css'

const skillData = [
    {
      "name":"Node.js",
      "level":"73%"
    },
    {
      "name":"React.js",
      "level":"78%"
    },
    {
      "name":"Python",
      "level":"64%"
    },
    {
      "name":"Angular",
      "level":"60%"
    },
    {
      "name":"MySQL",
      "level":"69%"
    },
    {
      "name":"Docker",
      "level":"60%"
    },
    {
        "name":"AWS",
        "level":"70%"
      },
      {
        "name":"Linux",
        "level":"63%"
      },
    {
      "name":"C",
      "level":"50%"
    }
  ]

  const barStyle= {
    color: "white",
    backgroundPosition:"center",
    fontFamily: "Helvetica, sans-serif",
    fontSize: "1vw",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",


  };

export default function SkillsBar() {

    const getRandomColor = () => {
        let letters = "012345678";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(9)];
    }
    return color;
    }

    const skills = skillData.map((skills) => {
        const backgroundColor = "white";
        const className = "bar-expand " + skills.name.toLowerCase();
        const width = skills.level;
  
        return (
          <li key={skills.name} style={{listStyleType:"none"}}>
            <span style={{ width, backgroundColor }} className = {className}></span>
            <em>{skills.name}</em>
          </li>
        );
      });

    return(
        <div>
        <Slide right duration={500}>
        <div className="row skill">
          <div className="three columns header-col">
          </div>
          <div className="nine columns main-col">
            <div className="bars">
              <ul className="skills">{skills}</ul>
            </div>
          </div>
        </div>
      </Slide>
      </div>
    )
}