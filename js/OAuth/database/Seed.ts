import { getManager } from "typeorm";
import { User } from "./entity/User";
import { UserProvider } from "./entity/UserProvider";

const Seed = async() => {
    const entityManager = getManager(); 

    const count = await User.count() + 1;
/*
    await entityManager.createQueryBuilder().insert().into(User).values({
        username:'username'+ count,
        password:'123456',
        email:'email',
        userProvider:{
            providerId: 'temp',
            providerName: 'tempType',
        }
    }).execute();*/
        /*

            const result = await entityManager.createQueryBuilder().insert().into(User).values({
                username:'username'+ count,
                password:'123456',
                email:'email'
            }).execute();

            const resultId = result.identifiers[0].id;
            //console.log('result ',resultId)

            //relation(User,'userProvider').of(User)
            const providerResult = await UserProvider.insert({
                userId: resultId,
                providerId: 'temp',
                providerType: 'tempType',
            });*/

            //console.log('providerResult ',providerResult)
        /*
    User.find({
        select:['username','email'],
       // relations:[ 'userProvider'],
        take:2,
        order:{id:'DESC'}
    },).then( (data) => {
        console.log(data);
    })
*/
/*
    UserProvider.find({
      //  select:['providerType'],
       relations:[ 'user'],
       take:2,

    }).then( (data) => {
        console.log(data);
    })

*/


    
}

export default Seed;