const mongoose = require('mongoose');
// set up db
mongoose.connect("mongodb://localhost:27017/users", { useNewUrlParser: true });
mongoose.Promise = global.Promise;