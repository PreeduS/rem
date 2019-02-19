const graphql = require('graphql');
const {buildSchema} = graphql;



const schema = buildSchema(`
    type Event {
        id: ID!,
        title: String!
        price: Float
    }
    input EventInput {
        id: ID!,
        title: String!
        price: Float
    }

    type RootQuery {
        placeholder: [String!]!
        events: [Event!]!
    }
    type MutationQuery {
        createPlaceholder(name: String!) : String!
        createEvent(event: EventInput!) : Event!
    }

    schema {
        query: RootQuery
        mutation: MutationQuery
    }
`);

const eventsData = [{
    id: 1,
    title: 'title 1',
    price: null
}];

const resolvers = {
    placeholder: () => ['ph', 'ph2'],
    createPlaceholder: (args) => {
        return 'placeholder';
    },
    events: () => eventsData,
    createEvent: (args) => {
        const {id, title} = args.event;
        const data = {
            id,
            title,
        };
        eventsData.push(data);
        console.log(args)
        return data;
    },

}

module.exports = {
    buildSchema: schema,
    resolvers
}


/*
mutation CreateEvent($event: EventInput!){
  createEvent (event: $event){
    id    
    title
  }

}

//query params:
{
    "event": {
        "id": 2,
        "title":"title 2"
    }
}


//-----------
query{
  events{
    id
    title
  }
}

*/