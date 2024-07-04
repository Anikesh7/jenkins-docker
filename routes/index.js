const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('index', {
        title: "Hello from jenkins :)",
        version: "0.1.5"
    });
});

module.exports = router;
