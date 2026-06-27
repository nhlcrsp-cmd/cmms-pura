const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    res.json({
        sistema: "CMMS Pura",
        version: "0.1.0",
        estado: "Servidor funcionando"
    });
});

module.exports = router;