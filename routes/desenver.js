const express = require('express'),
    multer = require('multer')
const { savedFileDirectory } = require('../lib/GlobalVariables')
const fs = require('fs')
const utf8 = require('utf8')
const router = express.Router(),
    storage = multer.diskStorage({destination:savedFileDirectory,filename:(req,file,cb)=>{
        cb(null,utf8.decode(file.originalname))
    }}),
    yukle = multer({storage})
/* GET home page. */
router.get('/', function(req, res) {
    try{
        fs.readdirSync(savedFileDirectory)
    }catch(error){
        fs.mkdir(savedFileDirectory)
    }
    res.render('desenver')
})
router.post('/',yukle.single('desen'),(req,res)=>{
    console.log(req.file)
    res.render('desenver',{mesaj:`${utf8.decode(req.file.originalname)} adlı desen yüklenmiştir.`})
})
module.exports = router
