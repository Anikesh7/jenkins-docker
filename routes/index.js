const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('index', {
        title: "Hello my first successful ci/cd pipeline",
        version: "0.1.0"
    });
});

module.exports = router;
