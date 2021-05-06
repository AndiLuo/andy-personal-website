import React from 'react'
import { useHistory } from "react-router-dom";
import Button from '@material-ui/core/Button';
import Scroll from 'react-scroll'
import './styles.css'
import andyLogo from "./images/andy_logo_white.png"

export default function Navbar() {
    const history = useHistory()
    const Link = Scroll.Link

    const redirectAbout = () => {
        history.push('/about/')
        window.scrollTo(0, 0)
    }

    const redirectHome = () => {
        history.push('/')
        window.scrollTo(0, 0)
    }

    const redirectProjects= () => {
        history.push('/projects')
        window.scrollTo(0, 0)
    }
    

    return (
        <div>
            <nav id="navbar" >
                <div class="nav-wrapper">
                    <ul id="menu" style={{cursor:"pointer"}}>
                        <li><Link onClick= {redirectHome}>Home</Link></li>
                        <li><Link onClick= {redirectAbout}>About</Link></li>
                        <li><Link onClick={redirectProjects}>Projects</Link></li>
                    </ul>
                </div>
            </nav> 
            
        </div>
    )

}