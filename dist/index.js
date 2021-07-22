"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = require("path");
// Extracting
const app = express_1.default();
const port = process.env.PORT || 3000;
// Static files
// console.log(path.join(__dirname.))
app.use(express_1.default.static('public'));
// app.engine('pug', require('pug')._express)
// app.useStaticAssets(resolve('./src/public'));
// app.setBaseViewsDir();
// Views
app.set("views", path_1.resolve('./src/views'));
app.set("view engine", 'pug');
app.get('/', (req, res) => {
    res.render("index");
});
app.listen(port, () => {
    console.log('Server is listening on port:' + port);
});
//# sourceMappingURL=index.js.map