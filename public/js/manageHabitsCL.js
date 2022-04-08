
let ul = document.querySelector('ul');
ul.addEventListener('click', async (e) => {
    try {
        e.preventDefault();
        if (e.target.className === "habit") {
            let primaryKey = e.target.id;
            let url = `/manageHabits/${primaryKey}`;
            let results = await fetch(url, {
                method: "DELETE",
                headers: { 'Content-type': 'application/json; charset=UTF-8' },
            });
            let records = await results.json();
            refresh(records);
            //console.log(record)
            //console.log(results)
        }
    } catch (err) {
        console.log("err", err)
    }
});



// let updateButton = document.querySelector('.update');
// updateButton.addEventListener('click', async (e) => {
//     try {
//         e.preventDefault();
//         if (e.target.className === "update") {
//             let primaryKey = e.target.id;
//             let url = `/manageHabits/${primaryKey}`;
//             let results = await fetch(url, {
//                 method: "PUT",
//                 headers: { 'Content-type': 'application/json; charset=UTF-8' },
//             });
//             let records = await results.json();
//             refresh(records);
//             //console.log(record)
//             //console.log(results)
//         }
//     } catch (err) {
//         console.log("err", err)
//     }
// });



// POST /manageHabits, creates a new habit to track
//find our add button
let addButton = document.querySelector('.add');

//attach event listener to it and listen for a click
addButton.addEventListener('click', async (e) => {
    try {
    //find text input html element out of dom and grab the value
    let habitInput = document.querySelector('#habitInput');
    let habitPositive = document.querySelector('#habitPositive');
    let habitNegative = document.querySelector('#habitNegative');
    // console.log(habitPositive.checked);

    //figure out which radio is checked:
    //instantiate habitType:
    let habitType = ""   //this allows habitType to be on same levle as the fetch call
    if (habitPositive.checked){
        habitType = "positive";
    }
    else {
        habitType = "negative";
    }


    //make fetch call to /manageHabits with title in header
            let results = await fetch('/manageHabits', {
                method: "POST",
                headers: { 'Content-type': 'application/json; charset=UTF-8' },
                body: JSON.stringify({
                    title: habitInput.value,
                    type: habitType
                })


            });

            //receive all of the habits in the database, including the new habits
            let records = await results.json();
            reload(records);
            //console.log(record)
            //console.log(results)
        }
    
    catch (err) {
        console.log("err", err)
    }
})

const refresh = (arr)=>{
    let htmlFragment = ""
    arr.forEach(obj => {
        htmlFragment += `
        <li>
            <label for=${obj.id}>${obj.title}</label>
            <div class="editHabit">
            <input type="text" id=${obj.id} name=${obj.title} value="">
            <button class ="update">Update habit</button>
            </div>
                <div>
                    <button><span id=${obj.id} class="habit"> delete</span></button>
                </div>
        </li>`
    })
    ul.innerHTML = htmlFragment
    }

const reload = (arr)=>{
    let htmlFragment = ""
    arr.forEach(obj => {
        htmlFragment += `
        <li>
            <label for=${obj.id}>${obj.title}</label>
            <div>
            <button><span id=${obj.id} class="habit"> delete</span></button>
          </div>
            </li>`
    })
    ul.innerHTML = htmlFragment
    }