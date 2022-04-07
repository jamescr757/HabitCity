// //grab ul dom element from html
// let ul = document.querySelector('ul');

// const listHabits = (records) => {
//     //retrieve ul dom element from html

//     let html = "";

//     //loop through each of the records from the db
// records.forEach(habitItem => {

//     //programatically create li tags with db habit items
//     html += `
//     <li>
//         <div>
//             ${habitItem.title}
//         </div>
//     </li>

//     `
// })

//     //append chunk of code to ul.innerhtml

//     ul.innerHTML = html;

// }


// const setup = async() => {

//     let results = await fetch('/manageHabits');
//     let records = await results.json();

//     console.log(records);

//     listHabits(records);

// }
// setup();


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
const refresh = (arr)=>{
let htmlFragment = ""
arr.forEach(obj => {
    htmlFragment += `<li>${obj.title}
              <div>
                <button><span id=${obj.id} class="habit"> delete</span></button>
              </div>
          </li>`
})
ul.innerHTML = htmlFragment
}