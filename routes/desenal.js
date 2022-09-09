var express = require('express')
const path = require('path')
const getFiles = require('../lib/getFiles')
const { savedFileDirectory } = require('../lib/GlobalVariables')
var router = express.Router()

/**
 * @method GET
 */
router.get('/',(req,res)=>{
    const files = getFiles()
    res.render('desenal',{files})
})
router.get('/indir/:fileName',(req,res)=>{
    const {fileName} = req.params
    console.log(path.join(savedFileDirectory,fileName))
    res.sendFile(path.join(savedFileDirectory,fileName))
    res.redirect('/desenal')
})
module.exports = router
