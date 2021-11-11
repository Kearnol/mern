const mongoose = require ("mongoose")

mongoose.connect("mongodb://localhost/vgames", {
    useNewURLParser: true,
    useUnifiedTopology: true,
})
.then( () => console.log("Connected to DB"))
.catch( err => console.log("Problem Connecting to DB: ", err))