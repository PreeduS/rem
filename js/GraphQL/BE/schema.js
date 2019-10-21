const graphqlTools = require('graphql-tools');
const {makeExecutableSchema} = graphqlTools;
var fs = require('fs');
//import Resolution from './typedefs/resolution.gql';
//import Resolution2 from './typedefs/resolution2.gql';
//import * as _ from 'lodash';
const merge = require('lodash/merge')


const loadDefs = (path) => {
    return fs.readFileSync(path, 'utf8');
}

const Resolution= loadDefs('./typedefs/resolution.gql');
const Resolution2= loadDefs('./typedefs/resolution2.gql');


const resolutionResolver = require('./resolvers/resolutionResolver');
const resolutionResolver2 = require('./resolvers/resolutionResolver2');
//resolutions: [Resolution]
const typeDefs = [`
    type Query {
        test: String
        resolutions: [Resolution]
        resolutions2: [Resolution2]
        subResolution2: SubResolution2
    }
    
    `,`
    type Mutation {
        createResolution: Resolution
    }
    
    `,
    Resolution,
    Resolution2,

];


console.log(typeDefs)
const resolvers = merge(
    {
        Query: {
            test: () => 'test data'
        },
        Mutation: {}
    },
    resolutionResolver,
    resolutionResolver2,

)

/*
const resolvers = {
    Query: {
        test: () => 'test data',
        resolutions: () => (
            resolutionsMock
        ),
    },
    Mutation: {
        createResolution: () => {
            let data = {
                id: resolutionsMock.length + 1,
                name: 'name'
            };
            resolutionsMock.push(data);
            return data;
        }
    }
}
*/
const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

module.exports = {
    schema
}