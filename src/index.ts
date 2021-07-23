import express from "express";
import {resolve} from "path";

// Extracting
const app = express();
// to parse json data from request object
app.use(express.json());

const port = process.env.PORT || 3000;

// Static files
app.use(express.static('public'))

// Views
app.set("views", resolve('./src/views') )
app.set("view engine", 'pug')

app.get('/', (req, res) => {
    res.render("index")
})

app.listen(port, () => {
    console.log('Server is listening on port:'+ port)
})