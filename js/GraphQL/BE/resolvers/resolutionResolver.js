const resolutionsMock = [{
    id: 1,
    name: 'Resolutions data mock'
}];


const resolution = {
    Query: {
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

module.exports = resolution;