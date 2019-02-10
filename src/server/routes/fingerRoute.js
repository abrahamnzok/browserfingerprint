const express = require('express');
const router = express.Router();
const {createHandler} = require('../handlers/fingerprintHandler');

create = async (req, res) => {
    const {fingerprint} = req.body;
    createHandler(fingerprint);
    return res.status(200);
};

display = async (req, res) => {
    const {fingerprint} = req.body;
    await res.send(fingerprint);
};


router.get('/create', create);
router.post('/display', display);

module.exports = router;
