const app = require('express')();
const bodypParser = require("body-parser");
const config = require('./config/config');
app.use(bodypParser.json());

app.use("/api",require('./routes/users'));
app.use("/api",require('./routes/drivers'));
app.use("/api",require('./routes/ships'));
app.use("/api",require('./routes/complains'));

//listen to port 3000
app.listen(process.env.port||3000);

