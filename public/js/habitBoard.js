const cardContainer = document.querySelector(".card-container");

const updateStreakNumber = async (id, number) => {
    await fetch(`/api/habits/streak/${id}/${number}`, {
        method: "PUT",
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    return;
}

cardContainer.addEventListener("click", async event => {
    if (event.target.attributes && event.target.attributes.value) {
        if (event.target.innerText === "-") {
            const streakNumber = document.getElementById(`streak-${event.target.value}`);
            let number = parseInt(streakNumber.innerText);
            number > 0 ? number-- : number = 0;
            streakNumber.innerText = number;
            if (number === 0) {
                const habitCard = document.getElementById(`card-${event.target.value}`);
                habitCard.className = "habit-card m-4 rounded shadow neutral";    
            }
            updateStreakNumber(event.target.value, number);
        } else if (event.target.innerText === "+") {
            const streakNumber = document.getElementById(`streak-${event.target.value}`);
            const number = parseInt(streakNumber.innerText) + 1;
            streakNumber.innerText = number;
            if (number === 1) {
                const habitCard = document.getElementById(`card-${event.target.value}`);
                if (habitCard.attributes.value.value === "positive") {
                    habitCard.className = "habit-card m-4 rounded shadow positive";    
                } else {
                    habitCard.className = "habit-card m-4 rounded shadow negative";    
                }
            }
            updateStreakNumber(event.target.value, number);
        } else if (event.target.innerText === "Reset") {
            const streakNumber = document.getElementById(`streak-${event.target.value}`);
            const habitCard = document.getElementById(`card-${event.target.value}`);
            streakNumber.innerText = 0;
            habitCard.className = "habit-card m-4 rounded shadow neutral";
            updateStreakNumber(event.target.value, number);
        } else if (event.target.innerText === "Comments") {
            console.log("Comments button clicked");
        }
    }
})