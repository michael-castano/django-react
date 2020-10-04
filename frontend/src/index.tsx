import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
  ApolloProvider
} from '@apollo/client';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
import * as serviceWorker from './serviceWorker';


const apiclient = new ApolloClient({
    uri: "http://127.0.0.1:8000/graphql",
    cache: new InMemoryCache()
});

const Init = () => (
  <ApolloProvider client={apiclient}>
    <App />
  </ApolloProvider>
)


ReactDOM.render(<Init></Init>, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
