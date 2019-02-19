const express = require('express');
const app = express();
const graphqlHTTP = require('express-graphql');
const schemaImperative = require('./schemas/imperative/schema');
const graphqlBuildSchema = require('./schemas/declarative/buildSchema/schema');
const ExecutableSchema = require('./schemas/declarative/executableSchema/schema');
const cors = require('cors');

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

