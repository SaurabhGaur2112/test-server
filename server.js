const express = require('express');

const app = express();

app.get('/', function(req, res) {
  res.send(JSON.stringify(req.headers));
});

app.listen(3000, () => {
  console.info(`Test server running on port 3000.`);
});

