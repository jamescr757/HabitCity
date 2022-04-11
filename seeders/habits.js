const db = require("../models");

db.Habits.bulkCreate([
    {
        title: "Bed before 10:30",
        type: "positive", // positive or negative
        userId: 5
    },
    {
        title: "Read 10 pages",
        type: "positive", // positive or negative
        userId: 5
    },
    {
        title: "Run 2 miles",
        type: "positive", // positive or negative
        userId: 5
    },
    {
        title: "Limit screen time before bed",
        type: "negative", // positive or negative
        userId: 5
    },
    {
        title: "Limit caffeine in afternoon",
        type: "negative", // positive or negative
        userId: 5
    }
])