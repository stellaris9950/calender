console.log("hi");

// Event listeners
let addBtn = document.getElementById('addAgenda');
addBtn.addEventListener('click', addAgenda);

let Agenda = loadStorage();
saveAgenda()
createArrayWithin();
function createArrayWithin() {
  for (let i = 0; i < 30; i++){
    Agenda.push([]);
  }
}


// Add new agenda
function addAgenda() {
  let planDay = +prompt("Enter Agenda Added Day:") - 1;
  let planTime = prompt("Enter Time:");
  let planDescription = prompt("Enter Description:");
  Agenda[planDay].push(AgendaString(planTime, planDescription));
  displayDiv();
  saveAgenda();
}
function newAgenda(planTime, planDescription){
  return {
    time: planTime,
    description: planDescription
  };
}

function AgendaString(planTime, planDescription) {
  return `
    \n <span class="tasks">${planTime}- ${planDescription}</sapn>
  `;
}



// drawing the Days
let outputEl = document.getElementById('output');
displayDiv()
function displayDiv() {
    let outputStr = '';
    for (let i = 0; i < 30; i++){
      outputStr += createDiv(i, Agenda[i]);
    }
    outputEl.innerHTML = outputStr;
}


// function displayAgenda(){
//   let agendaDisplay = ``
//   for (let i = 0; i < 30; i++){
//     for (let n = 0; n < Agenda[i].length; n++){
//       agendaDisplay += Agenda[i][n] ?? [];
//     }
//   }
//   return agendaDisplay;
// }

function createDiv(i, dayTasksArray) {
  return `
    <div class="grid-item">
      <span class="day-number">${i+1}</span>
      <div class="agenda">
      ${dayTasksArray}
      </div>
    </div>
  `
}

function saveAgenda() {
  localStorage.setItem('Agenda', JSON.stringify(Agenda))
}


// load Contact from local storage

function loadStorage() {
  let AgendaStr = localStorage.getItem('Agenda');
  return JSON.parse(AgendaStr) ?? [];
}
