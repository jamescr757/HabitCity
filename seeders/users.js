const db = require("../models");

db.User.bulkCreate([
    {
<<<<<<< HEAD
        email: "email0@gmail.com",
        password: "complicatedpassword0", 
        name: "chloe"
    },
    {
        email: "email1@gmail.com",
        password: "complicatedpassword1", 
        name: "veronica"
=======
        email: "email1@gmail.com",
        password: "1234",
        name: "Vero"
    },
    {
        email: "email2@gmail.com",
        password: "123456",
        name: "Chloe"
>>>>>>> main
    }
])