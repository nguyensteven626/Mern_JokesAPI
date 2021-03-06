const express = require("express");
const app = express();
const PORT = 8000;

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

// require("./config/mongoose.config");
require("./config/mongoose.config");

// const AllMyJokeRoutes = require("./routes/joke.routes");
// AllMyJokeRoutes(app);
//or
require('./routes/joke.routes')(app);

app.listen(PORT, () => console.log('>>Server Started at ${port}<<'))//always at the end of server.js 
