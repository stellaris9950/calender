console.log("hi");



let outputEl = document.getElementById('output');
displayDiv()
function displayDiv() {
    let outputStr = '';
    for (let i = 0; i < 30; i++){
      outputStr += createDiv(i);
    }
    outputEl.innerHTML = outputStr;
}
function createDiv(i) {
    return `
      <div class="grid-item">
        <span id="days">${i+1}</span>

      </div>
    `
}