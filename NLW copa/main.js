function createGame(p1, hr, p2) {
  return `
    <li>
        <img src="./assets/icon-${p1}.svg" alt="time-${p1}">
        <strong>${hr}</strong>
        <img src="./assets/icon-${p2}.svg" alt="time-${p2}">
    </li>
    `
}

let dlay = -0.4
function createCard(date, day, games) {
  dlay += 0.4
  return `
    <div class="card" style"animation-delay: ${dlay}s">
                <h2>${date} <span>${day}</span></h2>
                <ul>
                    ${games}
                </ul>
            </div>
    `
}

document.querySelector("#cards").innerHTML =
  createCard("24/11", "quinta", createGame("brasil", "16:00", "servia")) +
  createCard(
    "28/11",
    "segunda",
    createGame("brasil", "13:00", "suica"),
    createGame("portugal", "16:00", "uruguai")
  ) +
  createCard("02/12", "sexta", createGame("brasil", "16:00", "camarao"))
