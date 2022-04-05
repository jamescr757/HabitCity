module.exports = (req, res, next) => {
    const auth = req.isAuthenticated();
    if (auth) next();
    else res.redirect("/login"); // should be "/loginFailed" to display message to user
}