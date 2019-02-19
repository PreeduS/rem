const graphql = require('graphql');

const {
    GraphQLObjectType, GraphQLList, 
    GraphQLString, GraphQLInt, GraphQLID, 
    GraphQLSchema,
    GraphQLNonNull
} = graphql;

let booksMockup = [
    {name: 'Book1', genre:'A', id:'1', authorId: '1'},
    {name: 'Book2', genre:'A', id:'2', authorId: '2'},
    {name: 'Book3', genre:'A', id:'3', authorId: '1'},
    {name: 'Book4', genre:'B', id:'4', authorId: '1'},
    {name: 'Book5', genre:'B', id:'5', authorId: '1'},
];
let authorsMockup = [
    {name: 'Author1', age: 30, id:'1'},
    {name: 'Author2', age: 30, id:'2'},
    {name: 'Author3', age: 30, id:'3'},

];


const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        genre: {type: GraphQLString},
        author:{
            type: AuthorType,
            resolve(parent, args){
                return authorsMockup.find(x => x.id === parent.authorId); 
            }
        }
    })
});

const AuthorType = new GraphQLObjectType({
    name: 'Author',
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        age: {type: GraphQLInt},
        books:{
            type: new GraphQLList(BookType),
            resolve(parent, args){
                return booksMockup.filter(x => x.authorId === parent.id);  
            }
        }
    })
});


const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType,
            args: {
                id: {type: GraphQLID}
            },
            resolve(parent, args){
                return booksMockup.find(x => x.id === args.id);
            }
        },
        author: {
            type: AuthorType,
            args: {
                id: {type: GraphQLID}
            },
            resolve(parent,args){
                return authorsMockup.find(x => x.id === args.id);
            }
        },
        books: {
            type: new GraphQLList(BookType),
            resolve(parent, args){
                return booksMockup;
            }
        },
        authors: {
            type: new GraphQLList(AuthorType),
            resolve(parent, args){
                return authorsMockup;
            }
        }

    }
});

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addAuthor: {
            //type: AuthorType,
            type: new GraphQLList(AuthorType),
            args: {                                 //at least one arg is required by default
                name: {type: new GraphQLNonNull(GraphQLString)},
                age: {type: GraphQLInt},
            },
            resolve(parent, args){
                //add to db
                authorsMockup.push(
                    {name: args.name, age: args.age, id: authorsMockup.length + 1},
                );

                //return  {name: args.name, age: args.age, id: authorsMockup.length + 1};
                return authorsMockup;
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});