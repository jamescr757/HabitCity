const express = require('express');
//const bcrypt = require('bcryptjs'); //hash and salt our password
const router = express.Router();
const db = require('../models');
const auth = require('../auth/index');

const findAll = async req => {
    return await db.Habits.findAll({
        where: { userId: req.session.passport.user }
    });
}

router.get("/manageHabits", auth, async (req, res) => {
    try {
        const records = await findAll(req);
        res.render("manageHabits", { habits: records });
    } catch (err) {
        console.log(err)
    }
    
})



// // //delete a record
router.delete("/manageHabits/:id", async (req, res) => {
    try {
        let id = req.params.id
        await db.Habits.destroy({ where: { id: id} })
        let records = await findAll(req);
        res.json(records);
       // res.render("manageHabits", { habits: records });
    } catch (err) {
        console.log(err);
        res.json([])
    }
})


module.exports = router;