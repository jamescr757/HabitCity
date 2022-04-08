const db = require("../models");

db.User.bulkCreate([
    {
        email: "email1@gmail.com",
        password: "1234",
        name: "Vero"
    },
    {
        email: "email2@gmail.com",
        password: "123456",
        name: "Chloe"
    }
])