// Create web server
// Create a new web server using express
const express = require('express');
const app = express();
const port = 3000;

// Create a new web server using express
app.use(express.json());

// Create a new web server using express
app.get('/comments', (req, res) => {
    res.send('Hello World!');
});

// Create a new web server using express
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});