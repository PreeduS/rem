import React from 'react';
import {gql} from 'apollo-boost';
import {graphql, compose} from 'react-apollo';

const getBooksQuery = gql`
    {
        books{
            name
        }
    }
`;
const addAuthorMutation = gql`
    mutation($name:String!, $age:Int!){
            addAuthor(name:$name,age:$age){
            name
            age
        }
    }

`;
/*
query($id: ID){
    book(id:$id){...}
}
*/
const Book = (props) => {
    console.log(props)
    return (
        <div onClick = {() => props.addAuthorMutation({
            variables:{
                name:'name',
                age:25
            },
            refetchQueries:[{query:getBooksQuery}]
        })}>add author
        </div>
    );
}

//export default graphql(getBooksQuery)(Book);
export default compose(
    graphql(getBooksQuery,{name: 'getBooksQuery'}),
    graphql(addAuthorMutation,{name: 'addAuthorMutation'})
)(Book);

/*
//runs on state change
export default graphql(getBooksQuery,{
    options: (props => {
        return {
            variables:{
                id:props.id
            }
        }
    })
})(Book);
*/