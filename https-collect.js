const http = require('http');
const bl = require('bl');

const url = process.argv[2];

http.get(url, (response) => {
    response.pipe(bl((err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        
        const result = data.toString();
        console.log(result.length);
        console.log(result);
    }));
});
