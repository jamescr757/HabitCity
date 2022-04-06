const router = require("express").Router();

router.use("/user", require("./user"));
router.use("/habits", require("./habits"));

module.exports = router;