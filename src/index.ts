import express from "express";
import {resolve} from "path";

// Extracting
const app = express();

const port = process.env.PORT || 3000;

// Static files
// console.log(path.join(__dirname.))
app.use(express.static('public'))

// app.engine('pug', require('pug')._express)

// app.useStaticAssets(resolve('./src/public'));
// app.setBaseViewsDir();
// Views
app.set("views", resolve('./src/views') )
app.set("view engine", 'pug')

app.get('/', (req, res) => {
    res.render("index")
})

app.listen(port, () => {
    console.log('Server is listening on port:'+ port)
})