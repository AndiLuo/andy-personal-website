import React from 'react';
import { Route, HashRouter } from 'react-router-dom';
import "./components/styles.css"
import Profile from './components/home'
import About from './components/about'
import Projects from './components/projects'
import PageShell from './components/pageShell'

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
            <Route exact path ="/projects" component={PageShell(Projects)}/>
        </HashRouter>
    </div>
    </body>
  );
}

export default App;
