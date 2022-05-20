const addStudent = (student, prefix) => {
  const output = document.getElementById("output");
  let row = document.createElement("div");
  row.classList.add("row");
  let col = document.createElement("div");
  col.classList.add("col-1");
  col.classList.add("offset-1");
  col.innerHTML = prefix;
  let colVal = document.createElement("div");
  colVal.classList.add("col");
  colVal.innerHTML = student;
  row.appendChild(col);
  row.appendChild(colVal);
  output.appendChild(row);
};

const addStdToTable = (index, student) => {
  let tableBody = document.getElementById("tableBody");
  let row = document.createElement("tr");
  let cell = document.createElement("td");
  cell.setAttribute("scope", "row");
  cell.innerHTML = index;
  row.appendChild(cell);
  cell = document.createElement("td");
  cell.innerHTML = student.name;
  row.appendChild(cell);
  cell = document.createElement("td");
  cell.innerHTML = student.username;
  row.appendChild(cell);
  cell = document.createElement("td");
  cell.innerHTML = student.gender;
  row.appendChild(cell);
  tableBody.appendChild(row);
};

function onLoad() {
  // let student;
  fetch("/asset 1/students.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      data.forEach((v, i) => {
        addStdToTable(i + 1, v);
      })
    });
}
