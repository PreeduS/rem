const ormConfig : any =  {
    "type": "postgres",
    "host": "localhost",
    "port": 5432,
    "username": "postgres",
    "password": "postgres",
    //url: 'postgres://postgres:postgres@localhost:5432/db_test',

    "database": "demo_db",
    "synchronize": true,
    "logging": false,
    
    "entities": [
       "database/entity/**/*.ts"
    ],
    "migrations": [
       "database/migration/**/*.ts"
    ],
    "subscribers": [
       "database/subscriber/**/*.ts"
    ]
}
export default ormConfig