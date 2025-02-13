const fs = require('fs');
const path = require('path');

const dirPath = process.argv[2];
const extFilter = `.${process.argv[3]}`;

fs.readdir(dirPath, (err, files) => {
    if (err) {
        return console.error('Error reading directory:', err);
    }
    
    files.forEach(file => {
        if (path.extname(file) === extFilter) {
            console.log(file);
        }
    });
});
