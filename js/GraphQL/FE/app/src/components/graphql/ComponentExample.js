import React from 'react';
//import {gql} from 'apollo-boost';
import gql from "graphql-tag";
import {Query, Mutation } from 'react-apollo';

const getBooksQuery = gql`
    {
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
                    if(loading){
                         return <div>loading</div>
                    }
                    return <div>test</div>
                }}
            </Query>
            <Mutation mutation = {addAuthorMutation} >
                { (addMutation,...rest) => {
                    console.log('addAuthorMutation rest', rest)
                    return <div onClick = {
                        () => addMutation( {variables: {name:'name...', age: 33}}) 
                    }>click</div>
                }}
            </Mutation >
        </div>
    );
}

export default ComponentExample
