import {createConnection} from 'typeorm';
import ormConfig from '../config/ormconfig'

import Seed from './Seed'

createConnection(ormConfig).then(()=> {
    console.log('connection db')
    //Seed()

});

export default 'null'