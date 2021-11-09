const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/proj_mgr_db", {
    useNewURLParser: true,
    useUnifiedTopology: true,
    })
    .then (() => console.log("Established connection with database"))
    .catch (err => err => console.log(err));
