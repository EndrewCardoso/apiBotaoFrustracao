const express = require('express');
const router = express.Router();

const frustracaoController = require('./controllers/FrustracaoController');

router.post("/frustracao", frustracaoController.save);

module.exports = router;