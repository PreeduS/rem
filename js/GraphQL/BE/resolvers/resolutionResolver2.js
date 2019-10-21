const resolutionsMock = [{
    id2: 1,
    name2: 'Resolutions data mock 2'
}];


const resolution = {
    Query: {
        resolutions2: () => (
            resolutionsMock
        ),
        subResolution2:(parent, args, context, info)=>{
            return {
                id2: 1,
                name2: 'Resolutions data mock 2 inner'
            }
        }
    },
    SubResolution2:{
        // id: () => 'id-base',
        name: (parent) => {
            console.log('parent: ',parent)
            return 'name-base'
        },
    },
    Resolution2:{
        name2: (parent) => {
            return 'Resolutions data mock 2 second resolver'
        },
        subResolution2: () => {
            return {
                id: 'id-sub',
                name: 'name-sub',
                sub2Resolution2:{
                    name: 'name-sub2'
                }
            }
        },
    },

   /* Sub2Resolution2: {
            
        id: ()=>'id-base-sub2',
        name: ()=>'name-base-sub2'
        
    },*/

    Mutation: {
        createResolution2: () => {
            let data = {
                id: resolutionsMock.length + 1,
                name: 'name'
            };
            resolutionsMock.push(data);
            return data;
        }
    }
}

module.exports = resolution;