const os = require('os')
const path = require('path')
const savedFileDirectory = path.join(os.homedir(),'Desenler')

module.exports = {
    savedFileDirectory
}