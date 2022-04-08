
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

router.post('/manageHabits', async (req, res) => {
    try{
        let title = req.body.title;
        let id = req.session.passport.user;
        let type = req.body.type;
        let insert = await db.Habits.create({title: title, userId: id, type: type})

        let records = await findAll(req);
        console.log(records);
        res.json(records)
    }
    catch(error){
        console.log(error);
        res.json([])
      }
})


//edit
// router.get('/manageHabits/:id', async (req, res) => {
//     try {
//         let id = req.params.id;
//         let habit = await db.Product.findByPk(id);
//         let records = await findAll();
//         res.json(records);
//     } catch (err) {
//         console.log(err);
//         res.json([])
//     }

// })

router.put('/manageHabits/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const title = req.body.title;
        //let habit = await db.Habits.findByPk(id);
        const result = await db.Habits.update({
            title: title,
        }, {
            where: {
                id: id
            }
        });
        let records = await findAll(req);
        res.json(records);
        
    } catch (err) {
        console.log(err);
        res.json([])
    }
})
module.exports = router;