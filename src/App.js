import React from 'react';
import {Provider, connect} from 'react-redux';
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo';
import store from './store/';
import { Route, BrowserRouter } from 'react-router-dom';
import "./components/styles.css"

import LandingPage from './components/landingPage'
import createPinForm from '../src/components/createPinForm'
import Profile from './components/profile'

const client = new ApolloClient({
  uri: 'http://localhost:8080/graphql/pins',
});



function App(props) {

  return (
    //Apollo client routing
    <body>
    <div className = "website">
    <ApolloProvider client = {client}>
      <Provider store = {store}>
        <BrowserRouter>
            <Route exact path ="/" component={Profile}/>
            <Route path ="/createPin" component={createPinForm}/>
        </BrowserRouter>
      </Provider>
    </ApolloProvider>
    </div>
    </body>
  );
}

export default App;
