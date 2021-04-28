const { getShortUrl, decodeShortUrl } = require('../utils/short');
const { insertData, insertShortUrl,getredirectURL } = require('../utils/sql');

const route = require('express').Router();


route.get('/',(req,res)=>{
    res.render('index')
})

route.post('/short',async(req,res)=>{
    const data = {
        url:req.body.url
    }
    const id =await insertData(data)
    const shortURL = getShortUrl(id)
    const result = await insertShortUrl(id,shortURL)
    if(result!='Success')return res.send('Error')
    res.send(`http://localhost:3000/${shortURL}`)
})

route.get('/:id',async(req,res)=>{
    const id = req.params.id
    const userId = decodeShortUrl(id)
    const redirectUrl = await getredirectURL(userId)
    res.redirect(redirectUrl)
})

module.exports = route