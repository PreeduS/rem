const { Client } = require('@elastic/elasticsearch')
const client = new Client({ 
    node: 'http://localhost:9200' 
})

export const ping = async () => {
    try{
        const response = await client.ping({ });

        console.log('ping response: ',response)
    }catch(e){
        console.log('error: ',e)
    }
}

// index - place to store documents
export const createIndex = async(index) => {
    if(indexExists(index)){
        console.log('index exits ', index)
        return;
    }
    try{
        const response = await client.indices.create({
            index
        });
    console.log('indices response: ',response)
    }catch(e){
        console.log('error: ',e)
    }
}

export const indexExists = async(index) =>{
    try{
        const response = await client.indices.exists({
            index
        })
        console.log('indexExists response: ',response)
        return true;
    }catch(e){
        console.log('indexExists error: ',e)
        return false;
    }
}

export const initMappings = async(index, type, body) => {
    try{
        const response = await client.indices.putMapping({
            index,
            type,
            body
        })
        console.log('initMappings response: ',response)
    }catch(e){
        console.log('initMappings error: ',e)
    }

}
//id ?
export const addDocument = async({index,id, type, body}) => {

    try{
        const response = await client.index({
            index,
            id,
            type,
            body
        })
        console.log('addDocument response: ',response)
    }catch(e){
        console.log('addDocument error: ',e)
    }  
}

export const updateDocument = async(index,id, type, body) => {
    try{
        const response = await client.update({
            index,
            id,
            type,
            body
        })
        console.log('updateDocument response: ',response)
    }catch(e){
        console.log('updateDocument error: ',e)
    }  
}

export const searchDocument = async({index, type, q}) => {
    try{
        const response = await client.search({
            index,
            type,
            q
        })
       // console.log('searchDocument response: ',response)
        console.log('hits: ', response.body.hits.hits)
    }catch(e){
        console.log('searchDocument error: ',e)
    }  
}

