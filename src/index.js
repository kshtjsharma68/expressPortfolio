const express = require("express")
const {resolve} = require("path")

const routes = require("./routes")

// Extracting
const app = express();

// to parse json data from request object
app.use(express.json());

const port = process.env.PORT || 3000;

// Static files
app.use(express.static('public'))
app.use(routes)

// Views
app.set("views", resolve('./src/views') )
app.set("view engine", 'pug')


app.listen(port, () => {
    console.log('Server is listening on port:'+ port)
})