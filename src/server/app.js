const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const fingerRoute = require('./routes/fingerRoute');
const datavizRoute = require('./routes/datavizRoute');
const port = process.env.PORT || 3300;

app.use(cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
}));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/fingerprint', fingerRoute);
app.use('/viz', datavizRoute);

app.listen(port, () => console.log(`Server running on port ${port}`));
