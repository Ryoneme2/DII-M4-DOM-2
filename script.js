let student = {};
student.name = "คุณลุง";
student.username = "a@b.com";
student.gender = "ชาย";

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

window.addEventListener("load", () => {
  addStudent(student.name, "ชื่อ");
  addStudent(student.username, "อีเมล");
  addStudent(student.gender, "เพศ");
});
