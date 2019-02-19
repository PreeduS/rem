import React from 'react';
//import {gql} from 'apollo-boost';
import gql from "graphql-tag";
import {Query, Mutation, ApolloConsumer } from 'react-apollo';
//Query - fired on component mount
//ApolloConsumer - queries fired on event, not on component mount

const getBooksQuery = gql`
    {
        books{
            name
        }
    }
`;


//same
const getBooksQuery2 = gql`
    query QueryName{
        books{
            name
        }
    }
`;


const addAuthorMutation = gql`
    mutation($name:String!,$age:Int!){
            addAuthor(name: $name,age:$age){
            name
            age
        }
    }

`;

const ComponentExample = (props) => {

    return (
        <div>
            <Query query = {getBooksQuery}>
                { ({loading, error, data}) => {
                    console.log('getBooksQuery data ', data)
                    if(loading){ return <div>loading</div> }
                    if(error){ return <div>error</div> }
                    return <div>getBooksQuery</div>
                }}
            </Query>

            <Mutation mutation = {addAuthorMutation} >
                { (addMutation, ...rest) => {
                    //rest : {called: true, loading: false, data: {…}, error: undefined, client: DefaultClient}
                    return (
                        <button onClick = {
                            () => addMutation( {variables: {name:'name...', age: 33}}) 
                        }>addAuthorMutation</button>
                    )
                }}
            </Mutation>

            <ApolloConsumer>
                {client => {
                    return (
                        <button
                            onClick={async () => {
                                const { data } = await client.query({
                                    query: getBooksQuery2,
                                    //variables: { breed: "bulldog" }
                                });

                                console.log('ApolloConsumer data: ', data)
                            }}
                        >
                        GetBooks
                        </button>
                    );
                }}
            </ApolloConsumer>
        </div>
    );
}

export default ComponentExample



/*
const GET_DOG_PHOTO = gql`
  query Dog($breed: String!) {
    dog(breed: $breed) {
        ...
    }
  }
`;

<Query query={GET_DOG_PHOTO} variables={{ ... }}>
...

*/


