const cardContainer = document.querySelector(".card-container");

const updateStreakNumber = async (id, number) => {
    await fetch(`/api/habits/streak/${id}/${number}`, {
        method: "PUT",
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
}

const fetchComments = async id => {
    const data = await fetch(`/api/comments/${id}`);
    return await data.json();
}

const updateCardClass = (id, color) => {
    const habitCard = document.getElementById(`card-${id}`);
    if (!color) {
        habitCard.attributes.value.value === "positive" ? color = "positive" : color = "negative";
    }
    habitCard.className = `habit-card m-4 rounded shadow ${color}`;
}

const modifyNumber = (type, numberElement) => {
    if (type === "plus" || type === "minus") {
        let number = parseInt(numberElement.innerText);
        type === "plus" ? number++ : number--;
        return number < 0 ? 0 : number;
    }
    return 0;
}

const modifyStreakNumber = (id, type) => {
    const streakElement = document.getElementById(`streak-${id}`);
    const number = modifyNumber(type, streakElement);
    streakElement.innerText = number;
    return number;
}

// const renderComments = (cardElement, comments) => {
//     const html = [""];
//     comments.forEach(comment => {
//         html.push(`<div><span>${}</span><span></span></div>`)
//     })
// }

cardContainer.addEventListener("click", async event => {
    if (event.target.attributes && event.target.attributes.value) {
        if (event.target.innerText === "-") {
            const number = modifyStreakNumber(event.target.value, "minus");
            if (number === 0) updateCardClass(event.target.value, "neutral");
            updateStreakNumber(event.target.value, number);
        } else if (event.target.innerText === "+") {
            const number = modifyStreakNumber(event.target.value, "plus");
            if (number === 1) updateCardClass(event.target.value, false);
            updateStreakNumber(event.target.value, number);
        } else if (event.target.innerText === "Reset") {
            modifyStreakNumber(event.target.value, "reset");
            updateCardClass(event.target.value, "neutral");
            updateStreakNumber(event.target.value, 0);
        } else if (event.target.innerText === "Comments") {
            const habitCardMain = document.querySelector(`#card-${event.target.value} .habit-main`);
            // const comments = fetchComments(event.target.value);
            // habitCardMain.innerHTML = "";
        }
    }
})


/*
Habit card comments html layout
<div class="habit-main">
    <div class="comments-list">
        <form class="mx-2 py-1">
            <label for="commentInput">04/06 - </label>
            <input class="rounded" type="text" name="comment" id="commentInput" placeholder="Add comment here...">
        </form>
        <div class="comment py-1 mx-2">
            <span class="date-span">04/10 - </span>
            <p class="ms-1 mb-0">Read 12 Pages Read 12 Pages Read 12 Pages Read 12 Pages</p>
        </div>
    </div>
    <div class="row-buttons">
        <button value="<%= habit.id %>" class="btn btn-danger m-1">Clear</button>
        <button value="<%= habit.id %>" class="btn btn-success m-1">Streak</button>
    </div>
</div>
*/