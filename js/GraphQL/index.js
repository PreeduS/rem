const express = require('express');
const app = express();
const graphqlHTTP = require('express-graphql');

app.use('/graphql', graphqlHTTP({
    
}));

app.listen('8000',() => {

    console.log('listening ')
});

