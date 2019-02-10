const express = require('express');
const router = express.Router();
const {createHandler, doesExist} = require('../handlers/fingerprintHandler');

create = async (req, res) => {
    const {fingerprint} = req.body;
    const fingerPrintExists = await doesExist(fingerprint);
    if(!fingerPrintExists) {
        createHandler(fingerprint);
        return res.sendStatus(200);
    }else{
        return res.send({
            exist : fingerPrintExists,
            status: 409,
        })
    }
};

router.post('/create', create);

module.exports = router;
