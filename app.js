const express = require('express');
const app = express();

// Heroku dynamically sets a port
const PORT = process.env.PORT || 6000;

app.use(express.static('dist'));

app.listen(PORT, () => {
  x;
  console.log('server started on port:' + PORT);
});
