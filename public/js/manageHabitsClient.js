//grab ul dom element from html
let ul = document.querySelector('ul');

const listHabits = (records) => {
    //retrieve ul dom element from html

    let html = "";

    //loop through each of the records from the db
records.forEach(habitItem => {

    //programatically create li tags with db habit items
    html += `
    <li>
        <div>
            ${habitItem.title}
        </div>
    </li>

    `
})

    //append chunk of code to ul.innerhtml

    ul.innerHTML = html;

}


const setup = async() => {

    let results = await fetch('/manageHabits');
    let records = await results.json();

    console.log(records);

    listHabits(records);

}
setup();