const graphqlTools = require('graphql-tools');
const {makeExecutableSchema} = graphqlTools;

import Resolution from '../../../resolutions/resolution.gql';

const typeDefs = [`
    type Query {
        test: String
        resolutions: [Resolution]
    }
    `,`
    type Mutation {
        createResolution: Resolution
    }
    `,
    Resolution
];

const resolutionsMock = [{
    id: 1,
    name: 'Resolutions data'
}];

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

/*
mutation{
  createResolution{
    name
  }
}


query{
  resolutions {
    id
    name
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