"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
// Extracting
const app = express_1.default();
const port = process.env.PORT || 3000;
// Static files
// console.log(path.join(__dirname.))
app.use(express_1.default.static('../assets'));
// Views
app.set("views", path_1.default.join(__dirname, "views"));
app.set("view engine", "jade");
express_1.default.Router().get('/', (req, res) => {
    res.render("index");
});
app.listen(port, () => {
    console.log('Server is listening on port:' + port);
});
//# sourceMappingURL=index.js.map