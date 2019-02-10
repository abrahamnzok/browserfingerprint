const express = require('express');
const router = express.Router();
const {createHandler} = require('../handlers/fingerprintHandler');

create = async (req, res) => {
    const {fingerprint} = req.body;
    createHandler(fingerprint);
    return res.status(200);
};



router.post('/create', create);
module.exports = router;
