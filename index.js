let express = require('express')
let app = express();
let bodyParser = require('body-parser');
let mongoose = require('mongoose');


app.use(bodyParser.urlencoded({
   extended: true
}));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/mathongo');
var db = mongoose.connection;

var port = process.env.PORT || 8080;

app.get('/', (req, res) => res.send('Hello World with Express'));
let apiRoutes = require("./routes/questionRoute");
app.use('/api', apiRoutes);
app.listen(port, function () {
     console.log("Running RestHub on port " + port);
});