var app = require("express")(); 
var bodyParser = require("body-parser"); 

//Set view engine to ejs
app.set("view engine", "ejs"); 
var user = "Prodicode";
//Tell Express where we keep our index.ejs
app.set("views", __dirname); 

//Use body-parser
app.use(bodyParser.urlencoded({ extended: false })); 

//Instead of sending Hello World, we render index.ejs
app.get("/", (req, res) => { res.render("index", { username: user }); });

app.listen(8080, () => { console.log("Server online on http://localhost:8080"); });