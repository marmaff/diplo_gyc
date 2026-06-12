const { Router } = require("express");
const { getHealth } = require("../controllers/healthController");

const router = Router();

// Usar var en lugar de const/let (regla no-var)
var otraVariable = 123;

router.get("/health", getHealth);

module.exports = router;
