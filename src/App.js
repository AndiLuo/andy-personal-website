import React from 'react';
import { Route, HashRouter } from 'react-router-dom';
import "./components/styles.css"
import Profile from './components/home'
import About from './components/about'
import PageShell from './components/pageShell'
import NavBar from './components/navbar'

const routes = [
  { path: '/', name: 'Home', Component: Profile },
  { path: '/about', name: 'About', Component: About },
  
]

function App(props) {
  //for gh pages, must add exact route of homepage as route
  return (
    //Apollo client routing
    <body>
    <div className = "website">
        <HashRouter>
            <Route exact path ="/" component={PageShell(Profile)}/>
            <Route exact path ="/about" component={PageShell(About)}/>
        </HashRouter>
    </div>
    </body>
  );
}

export default App;
