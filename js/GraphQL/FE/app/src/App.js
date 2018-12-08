import React from 'react';
import logo from './logo.svg';

import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo'

import HocExample from './components/graphql/HocExample';
import ComponentExample from './components/graphql/ComponentExample';

const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql'
});

class App extends React.Component {
  render() {
    return (
      <ApolloProvider client = {client}>
        app
        <HocExample />
        <ComponentExample />
      </ApolloProvider>
    );
  }
}

export default App;
