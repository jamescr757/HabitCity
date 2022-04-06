const db = require("../models");

db.Habits.bulkCreate([
    {
        title: "bed before 10:30pm",
        type: "positive", // positive or negative
        userId: 1
    },
    {
        title: "read 10 pages",
        type: "positive", // positive or negative
        userId: 2
    },
    {
        title: "run 2 miles",
        type: "positive", // positive or negative
        userId: 2
    },
    {
        title: "drinking on weeknights",
        type: "negative", // positive or negative
        userId: 2
    },
    {
        title: "screentime in bed",
        type: "negative", // positive or negative
        userId: 1
    }
])