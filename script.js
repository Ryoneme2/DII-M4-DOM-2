let student = {};
student.name = "คุณลุง";
student.username = "a@b.com";
student.gender = "ชาย";

let student2 = {};
student2.name = "John";
student2.username = "commmm";
student2.gender = "หญิง";

const students = [
  student,
  student2,
  {
    name: "คุณลุง3",
    username: "usenrame",
    gender: "female",
  },
];

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
  students.forEach((std) => {
    addStudent(std.name, "ชื่อ");
    addStudent(std.username, "ยูสเสอร์");
    addStudent(std.gender, "เพศ");
  });
});
