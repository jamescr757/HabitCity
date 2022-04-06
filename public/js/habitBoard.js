const cardContainer = document.querySelector(".card-container");

const updateStreakNumber = async (id, number) => {
    await fetch(`/api/habits/streak/${id}/${number}`, {
        method: "PUT",
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
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
            console.log("Comments button clicked");
        }
    }
})