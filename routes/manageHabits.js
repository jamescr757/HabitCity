const express = require('express');
//const bcrypt = require('bcryptjs'); //hash and salt our password
const router = express.Router();
const db = require('../models')



const findAll = async () => {
    try {
        let records = await db.Habits.findAll();
        return records
    }
    catch (error) {
        return []
    }
}

router.get('/manageHabits', async (req, res) => {
    try {
        let records = await findAll(); //[{}, {}, {}]
        console.log(records)
        res.render('manageHabits', {
            habits: records
        })
    }
    catch (error) {
        console.log(error)
        //res.render('/manageHabits')
    }
})




module.exports = router;