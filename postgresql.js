const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  //password: 'password',
  port: 5432,
})
const psql={}

psql.createPolicy = (request, response) => {
    const {contactInformation, deliveryInformation,personalInformation,vehicleOwnerInformation } = request
  
    pool.query('INSERT INTO purchasePolicy (contactInformation, deliveryInformation,personalInformation,vehicleOwnerInformation) VALUES ($1, $2, $3, $4)', [contactInformation, deliveryInformation,personalInformation,vehicleOwnerInformation], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`Policy added with ID: ${results.insertId}`)
    })
}

 psql.getPolicyDetails = (response) => {
    pool.query('SELECT * FROM purchasePolicy', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }
module.exports=psql
