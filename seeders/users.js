const db = require("../models");

db.User.bulkCreate([
    {
        email: "email0@gmail.com",
        password: "complicatedpassword0", 
        name: "chloe"
    },
    {
        email: "email1@gmail.com",
        password: "complicatedpassword1", 
        name: "veronica"
    }
])