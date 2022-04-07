// const express = require('express');
// //const bcrypt = require('bcryptjs'); //hash and salt our password
// const router = express.Router();
// const db = require('../models')
// const auth = require('../auth/index');


// const findAll = async () => {
//     try {
//         let records = await db.Habits.findAll();
//         return records
//     }
//     catch (error) {
//         return []
//     }
// }

// router.get('/manageHabits', async (req, res) => {
//     try {
//         let records = await findAll(); //[{}, {}, {}]
//         console.log(records)
//         res.render('manageHabits', {
//             habits: records
//         })
//     }
//     catch (error) {
//         console.log(error)
//         //res.render('/manageHabits')
//     }
// })




// module.exports = router;

const express = require('express');
//const bcrypt = require('bcryptjs'); //hash and salt our password
const router = express.Router();
const db = require('../models');
//const auth = require('../auth/index');

const findAll = async ()=>{
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



// // //delete a record
router.delete("/manageHabits/:id", async (req, res) => {
    try {
        let id = req.params.id
        await db.Habits.destroy({ where: { id: id} })
        let records = await findAll();
        res.json(records);
       // res.render("manageHabits", { habits: records });
    } catch (err) {
        console.log(err);
        res.json([])
    }
})


module.exports = router;