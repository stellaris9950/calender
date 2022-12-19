console.log("hi");

// Event listeners
let addBtn = document.getElementById('addAgenda');
addBtn.addEventListener('click', addAgenda);

let Agenda = [];



// Add new agenda
function addAgenda() {
  let planDay = +prompt("Enter Agenda Added Day:") - 1;
  let planTime = prompt("Enter Time:");
  let planDescription = prompt("Enter Description:");
  Agenda[planDay] = newAgenda(planTime, planDescription);
}
function newAgenda(){
  
}

function AgendaString(planTime, planDescription) {
  return `
    <span>${planTime}: ${planDescription}</sapn>
  `;
}



// drawing the Days
let outputEl = document.getElementById('output');
displayDiv()
function displayDiv(agenda) {
    let outputStr = '';
    for (let i = 0; i < 30; i++){
      outputStr += createDiv(i);
    }
    outputEl.innerHTML = outputStr;
}
function createDiv(i) {
  return `
    <div class="grid-item">
      <span class="day-number">${i+1}</span>
      ${Agenda[i]}
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