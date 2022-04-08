//const db = require("../models");

let ul = document.querySelector('ul');
ul.addEventListener('click', async (e) => {
    try {
        e.preventDefault();
        console.log(e)
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