const http = require('http');
const urls = process.argv.slice(2);
let results = new Array(urls.length).fill(null);
let count = 0;

urls.forEach((url, index) => {
    http.get(url, (response) => {
        let rawData = '';
        response.setEncoding('utf8');

        response.on('data', (chunk) => {
            rawData += chunk;
        });

        response.on('end', () => {
            results[index] = rawData;
            count++;
            if (count === urls.length) {
                results.forEach((data) => console.log(data));
            }
        });
    }).on('error', (err) => {
        console.error('Error:', err.message);
    });
});
