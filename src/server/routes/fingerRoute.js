const express = require('express');
const router = express.Router();
const {createHandler, doesFingerPrintHashExist, isCollision, incrementHashCollision, incrementVisit} = require('../handlers/fingerprintHandler');

create = async (req, res) => {
    const {fingerprintHash, fingerprint} = req.body;
    const fingerPrintExists = await doesFingerPrintHashExist(fingerprintHash);
    const collision = await isCollision(fingerprintHash, fingerprint);
    if(!fingerPrintExists) {
        createHandler(fingerprintHash, fingerprint);
        return res.sendStatus(200);
    }else{
        if(!collision) {
            await incrementHashCollision(fingerprintHash);
        }else{
            await incrementVisit(fingerprintHash)
        }
        return res.send({
            message : `FingerPrint exists or there might have been a collision`,
            status: 409,
        })
    }
};

router.post('/create', create);

module.exports = router;
