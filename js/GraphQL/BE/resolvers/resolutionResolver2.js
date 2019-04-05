const resolutionsMock = [{
    id2: 1,
    name2: 'Resolutions data mock 2'
}];


const resolution = {
    Query: {
        resolutions2: () => (
            resolutionsMock
        ),

    },

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