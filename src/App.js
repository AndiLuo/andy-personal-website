import React from 'react';
import {Provider, connect} from 'react-redux';
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo';
import store from './store/';
import { Route, HashRouter } from 'react-router-dom';
import "./components/styles.css"

import Profile from './components/profile'
import About from './components/about'

const client = new ApolloClient({
  uri: 'http://localhost:8080/',
});

function App(props) {
  //for gh pages, must add exact route of homepage as route
  return (
    //Apollo client routing
    <body>
    <div className = "website">
    <ApolloProvider client = {client}>
      <Provider store = {store}>
        <HashRouter>
            <Route exact path ="https://AndiLuo.github.io/home" component={Profile}/>
            <Route exact path ="https://AndiLuo.github.io/about" component={About}/>
        </HashRouter>
      </Provider>
    </ApolloProvider>
    </div>
    </body>
  );
}

export default App;
