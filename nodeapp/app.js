const http = require('http');

const port = 3000;

const { exec } = require('child_process');

http.createServer(function (req, res) {
        exect("ps aux", (err, stdout, stderr) => {
                  res.write(stdout);
                  res.end();
        });
}).listen(port);
