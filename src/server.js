const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');


const routes = require('./routes');

const app = express();

mongoose.connect(process.env.MONGO_URL || 'mongodb//mongodb://127.0.0.1:27017/mongodb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')))
app.use(routes);

app.listen(process.env.PORT || 3333);