const db = require("../models");

db.Habits.bulkCreate([
    {
<<<<<<< HEAD
        title: "bed before 10:30pm",
=======
        title: "Bed before 10:30",
>>>>>>> main
        type: "positive", // positive or negative
        userId: 1
    },
    {
<<<<<<< HEAD
        title: "read 10 pages",
        type: "positive", // positive or negative
        userId: 2
    },
    {
        title: "run 2 miles",
=======
        title: "Read 10 pages",
        type: "positive", // positive or negative
        userId: 1
    },
    {
        title: "Run 2 miles",
>>>>>>> main
        type: "positive", // positive or negative
        userId: 2
    },
    {
<<<<<<< HEAD
        title: "drinking on weeknights",
        type: "negative", // positive or negative
        userId: 2
    },
    {
        title: "screentime in bed",
=======
        title: "screen time in bed",
        type: "negative", // positive or negative
        userId: 1
    },
    {
        title: "drinking on week nights",
>>>>>>> main
        type: "negative", // positive or negative
        userId: 1
    }
])