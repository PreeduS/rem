const express = require('express');
const app = express();
const graphqlHTTP = require('express-graphql');
//const schemaImperative = require('./schemas/imperative/schema');
//const graphqlBuildSchema = require('./schemas/declarative/buildSchema/schema');
//const ExecutableSchema = require('./schemas/declarative/executableSchema/schema');
const ExecutableSchema = require('./schema');
const cors = require('cors');

import {ping, createIndex, addDocument, searchDocument} from './elasticsearch/client'
//ping();
// createIndex('blog');
/*
addDocument({
    index: 'blog',
    type:'post',
    id:1,
    body: {
        "PostName": "Integrating Elasticsearch Into Your Node.js Application",
        "PostType": "Tutorial",
        "PostBody": "This is the text of our tutorial about using Elasticsearch in your Node.js application.",
    }
})
*/
searchDocument({
    index: 'blog',
    type:'post',
    q: 'PostName:Node.js'
})

app.use(cors());
/*
app.use('/graphql', graphqlHTTP({
    schema: schemaImperative,
    graphiql: true
}));
*/
/*
app.use('/graphql', graphqlHTTP({
    schema: graphqlBuildSchema.buildSchema,
    graphiql: true,
    rootValue: graphqlBuildSchema.resolvers
}));
*/

app.use('/graphql', graphqlHTTP({
    schema: ExecutableSchema.schema,
    graphiql: true,
}));



app.listen('8000',() => {
    console.log('listening ')
});

