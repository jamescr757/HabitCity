const router = require("express").Router();

router.get("/", (req, res) => {
    res.render("login", {
        failMessage: false
    });
})

router.use("/api", require("./api"));

router.get('/logout', (req, res) => {
    req.logout()
    res.redirect('/login')
})


module.exports = router;