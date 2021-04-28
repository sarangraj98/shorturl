const { client } = require("../db")

const insertData = async(data)=>{
    const query = `insert into short (url,short_key) values('${data.url}','test') returning id;`
    const result= await client.query(query)
    return result.rows[0].id
}
const insertShortUrl = async(id,shortUrl)=>{
    const query = `update short set short_key='${shortUrl}' where id=${id};`
    try {
        await client.query(query)
        return 'Success'
    } catch (error) {
        console.log(error)
        return error
    }
}
const getredirectURL = async(id)=>{
    const query = `select url from short where id=${id};`
    const {rows}= await client.query(query);
    return rows[0].url    
}
module.exports={
    insertData,
    insertShortUrl,
    getredirectURL
}