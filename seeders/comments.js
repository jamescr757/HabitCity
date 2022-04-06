const db = require("../models");

db.Comments.bulkCreate([
    {
        text: "I had a good day",
        userId: 1
    },
    {
        text: "I had a great evening",
        userId: 2
    }])