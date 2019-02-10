let express = require('express')
let app = express();
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
var cors = require('cors');


app.use(bodyParser.urlencoded({
   extended: true
}));
app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://localhost/mathongo');
var db = mongoose.connection;

var port = process.env.PORT || 8080;

app.get('/', (req, res) => res.send('Hello World with Express'));
let questionRoutes = require("./routes/questionRoute");
let quizRoutes = require("./routes/quizRoute");
app.use('/api', questionRoutes);
app.use('/q', quizRoutes);
app.listen(port, function () {
     console.log("Running RestHub on port " + port);
});