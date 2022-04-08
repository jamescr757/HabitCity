
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
            refresh(records);
            //console.log(record)
            //console.log(results)
            habitInput.value = "";
        }
    
    catch (err) {
        console.log("err", err)
    }
})


const refresh = (arr) => {
    let htmlFragment = ""
    arr.forEach(obj => {
        htmlFragment += `
    <li>
            <label class=${obj.title} for=${obj.title}">
              ${obj.title}
            </label>
                <button><span id=${obj.id} class="habit"> delete</span></button>
                <button class="editBtn" id=${obj.id}>Edit</button>
          </li>`
    })
    ul.innerHTML = htmlFragment
}
// edit

const updateForm = document.querySelector(".mainForm");
let editButton = document.querySelector('.editBtn')
ul.addEventListener('click', async (e) => {
    //console.log(e)
    try {
        e.preventDefault();
        if (e.target.className === "editBtn") {
            let primaryKey = e.target.id;
            localStorage.key = primaryKey;
            let url = `/manageHabits/${primaryKey}`;
            console.log("primaryKey",primaryKey)
            let parentEl = e.target.parentElement;
            //console.log(parentEl);
            updateForm["habitName"].value = parentEl.querySelector("label").innerText;
        }
    } catch (err) {
        console.log("error on edit", err)
    }
});

    let form = document.querySelector("#habitForm")
    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        console.log("checking form")
        let updateInput = document.querySelector("#updateInput");
        let value = updateInput.value;
        let label = document.querySelectorAll("label");
        console.log("label",label.innerText);
        label.innerText = value;
        let primaryKey = localStorage.key;
        console.log("new",primaryKey);
        let url = `/manageHabits/${primaryKey}`;
        let payload = {id:primaryKey,title:label.innerText}
        let results = await fetch(url, {
        method: "PUT",
            headers: { 'Content-type': 'application/json; charset=UTF-8' },
        body: JSON.stringify(payload)
        });
        let records = await results.json();
        console.log("records",records)
        refresh(records);
    });
