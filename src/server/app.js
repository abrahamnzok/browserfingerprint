const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const {connect} = require('./mongoconfig');
const fingerRoute = require('./routes/fingerRoute');
const port = process.env.PORT || 3300;

app.use(cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
}));

connect({url: 'mongodb://localhost:33300'}, {useNewUrlParser: true}).then(response => {
    console.log(`Connecting to mongodb server on port 33300`)
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/fingerprint', fingerRoute);

app.listen(port, () => console.log(`Server running on port ${port}`));
