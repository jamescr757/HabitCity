const router = require("express").Router();
const db = require("../../models");

router.get("/:habitId", async (req, res) => {
    const records = await db.User.findAll({
        where: { habitId: req.params.habitId },
        order: [ ["createdAt", "DESC"] ]
    })
    res.json(records);
});

module.exports = router;