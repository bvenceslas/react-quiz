// file system with nodejs

const fs = require('fs');

fs.writeFile('./myData.txt', 'Venceslas \nBurongu', (err, success) => {
    if(!err){
        fs.readFile('./myData.txt', (err, data) => {
            if(!err) console.log(data.toString())
        })
    }
})

