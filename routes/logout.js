const router = require("express").Router();

router.get("/logout", (req, res) => {
    req.logout();
    res.redirect = "/login";
})

module.exports = router;