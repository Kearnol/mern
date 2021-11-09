const express = require('express');
const app = express();
const port = 8000;
const cors = require('cors');
app.use(cors());
require('./config/mongoose.config')
app.use(express.json());
app.use(express.urlencoded({extended: true}));
require('./routes/product.routes')(app)

app.listen(port, () => console.log(`You are now listening on port: ${port}`));