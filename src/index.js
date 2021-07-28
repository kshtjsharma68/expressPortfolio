const express = require("express")
const {resolve} = require("path")

const bodyParser = require('body-parser');
const session = require('express-session');

const routes = require("./routes")

// Extracting
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false })); 

const port = process.env.PORT || 3000;

// Static files
app.use(express.static('public'))

var MemoryStore = session.MemoryStore;
//Setting session
app.use(session({
    secret: 'cookie_secret',
    resave: true,
    store: new MemoryStore(),
    saveUninitialized: true,
    cookie: { secure: false },
    maxAge: 3600
}));

//Routes
app.use(routes)

// Views
app.set("views", resolve('./src/views') )
app.set("view engine", 'pug')





app.listen(port, () => {
    console.log('Server is listening on port:'+ port)
})