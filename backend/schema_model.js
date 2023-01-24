let mongoose = require('mongoose');
let newsSchema = mongoose.Schema({name : String , email : String , password : String})
module.exports = mongoose.model("users",newsSchema);