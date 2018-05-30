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

// HttpLink intercepts the http status
const link = new HttpLink({
  uri: TEMP_URI,
});

// Takes in the link to graphql api and optional cache
// In memory cache <-- look up
const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

// Provider passes already instantied client down to children components
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root'),
);

registerServiceWorker();
