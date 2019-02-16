const express = require('express');
const {retrieveData} = require('../handlers/datavizHandler');
const router = express.Router();

retrieveRoute = async (req, res) => {
    const result = await retrieveData();
    return res.status(200).json(result);
};

router.get('/', retrieveRoute);

module.exports = router;













