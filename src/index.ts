import express from "express";
import path from "path";

// Extracting
const app = express();

const port = process.env.PORT || 3000;

// Static files
// console.log(path.join(__dirname.))
app.use(express.static('../assets'))
// Views
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "jade")

express.Router().get('/', (req, res) => {
    res.render("index")
})

app.listen(port, () => {
    console.log('Server is listening on port:'+ port)
})