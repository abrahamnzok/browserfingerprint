const express = require('express');
const router = express.Router();
const {createHandler, doesFingerPrintHashExist,handleCollision} = require('../handlers/fingerprintHandler');

create = async (req, res) => {
    const {fingerprintHash, fingerprint} = req.body;
    const fingerPrintExists = await doesFingerPrintHashExist(fingerprintHash);
    await handleCollision(fingerprintHash, fingerprint);
    if(!fingerPrintExists) {
        createHandler(fingerprintHash, fingerprint);
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
