const express = require("express");
const app = express();
const helmet = require("helmet");
const cookieSession = require("cookie-session");
const passport = require("passport");
const db = require("./models");
require("./auth/passport-config")(passport);
const PORT = 3000;

app.set("view engine", "ejs");

app.use(express.static("public"));

app.use(helmet());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cookieSession({
    name: "session",
    keys: ["aaabbbcccddd"],
    maxAge: 14 * 24 * 60 * 60 * 1000
}))

app.use(passport.initialize());
app.use(passport.session());

// app.use(require("./routes/index"))
app.use(require("./routes/manageHabits"))

db.sequelize.sync({ force: false })
.then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    })
})

