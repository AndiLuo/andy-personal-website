import React from 'react';
import {Provider, connect} from 'react-redux';
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo';
import store from './store/';
import { Route, BrowserRouter } from 'react-router-dom';
import "./components/styles.css"

import Profile from './components/profile'

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
        <BrowserRouter>
            <Route exact path ="/andy-personal-website/" component={Profile}/>
        </BrowserRouter>
      </Provider>
    </ApolloProvider>
    </div>
    </body>
  );
}

export default App;
