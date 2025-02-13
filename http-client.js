const http = require('http');

const url = process.argv[2];

http.get(url, (response) => {
    response.setEncoding('utf8');
    
    response.on('data', (data) => {
        console.log(data);
    });
    
    response.on('error', (err) => {
        console.error('Error:', err);
    });
}).on('error', (err) => {
    console.error('Request Error:', err);
});