const fs = require('fs')
const {savedFileDirectory} = require('./GlobalVariables')
function getFiles(){
    try{
        fs.mkdirSync(savedFileDirectory)
    }catch(error){
        ''
    }
    const files =fs.readdirSync(savedFileDirectory) ||[]
    return files
}

module.exports = getFiles