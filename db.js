const { Client } = require('pg')
const client = new Client({
  host: 'ec2-34-233-0-64.compute-1.amazonaws.com',
  port: 5432,
  user: 'syiqfqsvbadcaa',
  database:'damr2i1jhpkk8j',
  password: '5b7a95a488d3e8aec863714a3985085b0db119fbc1768f1dbde50cc4f82cb37d',
})
client.connect(err => {
    if (err) {
      console.error('connection error', err.stack)
    } else {
      console.log('connected')
    }
  })

module.exports = {
    client
}