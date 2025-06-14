const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = "mongodb://localhost:27017/leads_db"; 
db.leads = require("./lead.model.js")(mongoose);

module.exports = db;
