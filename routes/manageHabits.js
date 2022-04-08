const express = require('express');
//const bcrypt = require('bcryptjs'); //hash and salt our password
const router = express.Router();
const db = require('../models');
//const auth = require('../auth/index');

const findAll = async () => {
    let record = await db.Habits.findAll();
    return record;
}

router.get("/manageHabits", async (req, res) => {
    try {
        const records = await findAll();
        res.render("manageHabits", { habits: records });
    } catch (err) {
        console.log(err)
    }

})
//delete record
router.delete("/manageHabits/:id", async (req, res) => {
    try {
        let id = req.params.id
        await db.Habits.destroy({ where: { id: id } })
        let records = await findAll();
        res.json(records);
        // res.render("manageHabits", { habits: records });
    } catch (err) {
        console.log(err);
        res.json([])
    }
})
//update record
router.put('/manageHabits/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const title = req.body.title;
        console.log(req.body);
        const result = await db.Habits.update({
            title: title,
        }, {
            where: {
                id: id
            }
        });
        let records = await findAll();
        res.json(records);
    } catch (err) {
        console.log(err);
        res.json(["this is an err"])
    }
})
module.exports = router;