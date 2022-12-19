function drawArray() {
    let outputStr = "";
    let divHeight;
    for (let i = 0; i < grades.length; i++) {
      divHeight = (grades[i] / maxGrade) * 600; // Scale grades to fit in array visualizer container
      outputStr += `<div style="height:${divHeight}px"></div>`;
    }
    containerEl.innerHTML = outputStr;
  }

  