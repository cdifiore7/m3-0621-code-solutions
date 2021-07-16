const express = require('express');
const app = express();
const path = require('path');
const url = path.join(__dirname, 'public');
const pathstatic = express.static(url);
app.use(pathstatic);
app.listen(3000, () => {
  console.log('Express server listening on port 3000');
});
