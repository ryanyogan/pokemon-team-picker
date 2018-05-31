import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import registerServiceWorker from './registerServiceWorker';

import { TEMP_URI } from './constants';

import App from './App';
import './index.css';

// Here we are creating a new Apollo Link (http)
// There are others for Subscriptions (WS), Errors, and much more!
const link = new HttpLink({
  uri: TEMP_URI,
});

// Create a new client instance of ApolloClient,
// the ApolloCLient handles all of our wiring up reqquests,
// caching, and so much more!
const client = new ApolloClient({
  link,
  cache: new InMemoryCache(), // Please read more about `apollo-cache-inmemory`
});

// We are going to "wrap" our application in the <ApolloProvider></ApolloProvider>
// This is a helper which will use the ApolloClient (cache === store) to persist
// our data, update, and much more!  This provider passes the apollo client down
// our component tree from <App /> to the smallest nested component!
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root'),
);

registerServiceWorker();
