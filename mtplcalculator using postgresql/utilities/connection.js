const pgpromise=require('pg-promise')
const connection=new pgpromise();

const client={
    user:"postgres",
    host:"localhost",
    database:"insurance",
    password:"admin",
    port:5432
}

const database=connection(client);

module.exports=database;