require('dotenv').config();
const cors = require("cors");
const PORT = process.env.PORT;
const express = require('express');
const app = express();
const path = require('path');
const Graphql = require("./graphql");

function getPage(pathTo) {
    return path.join(__dirname, `views/${pathTo}`)
}

app.use(cors())

app.use('/public', express.static(path.join(__dirname, './public')));

app.use("/graphql", Graphql);

app.get('/', (req, res) => {
    res.send("<h1> hello world</h1>");
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}!`);
});