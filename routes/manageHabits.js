
const express = require("express");
const router = express.Router();
const db = require('../models');

//scrape from header for our post
router.use(express.urlencoded({extended: false}));
router.use(express.json());


const findAll = async() => {
    try{
      let records = await db.Habits.findAll(); 
      console.log(records);
      return records

    }
    catch(error){
      return []
    }
}

//Create your node routes first and test them on thunder client
// GET /todos, displays all of the habits

router.get('/manageHabits', async (req, res) => {

    try{
        let records = await findAll(); //db.habits.
        // let title = records.title;
        // res.json(records);
    // console.log(records);
    res.render("manageHabits", {
        records: records,
    });
    console.log(records);
    }

    catch(error){

    console.log(error);
    res.json([])
    }
})




// GET /habits/:id , displays habits by id

// POST /habits, creates a new todo

// PUT /habits/:id, update a todo item

// DELETE /habits/:id, delete a todo

module.exports = router;