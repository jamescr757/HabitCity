const db = require("../models");

db.Habits.bulkCreate([
    {
        title: "Bed before 10:30",
        type: "positive", // positive or negative
        userId: 1
    },
    {
        title: "Read 10 pages",
        type: "positive", // positive or negative
        userId: 1
    },
    {
        title: "Run 2 miles",
        type: "positive", // positive or negative
        userId: 2
    },
    {
        title: "screen time in bed",
        type: "negative", // positive or negative
        userId: 1
    },
    {
        title: "drinking on week nights",
        type: "negative", // positive or negative
        userId: 1
    }
])