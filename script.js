const btn = document.getElementById("btn");
const btnSubmit = document.getElementById("btn-submit");
var index = 1;

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

function addStudentData(student) {
  let idElem = document.getElementById("id");
  idElem.innerHTML = student.id;
  let studentIdElem = document.getElementById("studentId");
  studentIdElem.innerHTML = student.studentId;
  let nameElem = document.getElementById("name");
  nameElem.innerHTML = `${student.name} ${student.surname}`;
  let gpaElem = document.getElementById("gpa");
  gpaElem.innerHTML = student.gpa;
  let profileElem = document.getElementById("image");
  profileElem.setAttribute("src", student.image);
}

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

const addStdToTableImg = (index, student) => {
  let tableBody = document.getElementById("tableBody");
  let row = document.createElement("tr");
  let cell = document.createElement("td");
  let img = document.createElement("img");
  img.src = student.image;
  img.setAttribute("width", "70px");
  img.setAttribute("height", "100px");
  cell.setAttribute("scope", "row");
  cell.innerHTML = index;
  row.appendChild(cell);
  cell = document.createElement("td");
  cell.innerHTML = student.name;
  row.appendChild(cell);
  cell = document.createElement("td");
  cell.appendChild(img);
  row.appendChild(cell);
  cell = document.createElement("td");
  cell.innerHTML = student.surname;
  row.appendChild(cell);
  tableBody.appendChild(row);
};

const addStdToDb = (student) => {
  fetch("https://dv-student-backend-2019.appspot.com/students", {
    method: "POST",
    body: JSON.stringify(student),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if(response.ok) {
        return response.json();
      }
      throw new Error("Add std failed");
    })
    .then((data) => {
      console.log(data);
    }).catch((e) => console.error(e));
};

const delTheerakarn = async (student) => {
  const res = await fetch(
    "https://dv-student-backend-2019.appspot.com/students"
  );
  const userData = await res.json();

  const idTheerakarn = userData
    .filter((v) => v !== null)
    .map((v, i) => {
      console.log(v);
      if (v.studentId === "642110319") {
        return v.id;
      }
    })
    .filter((v) => v !== undefined);

  console.log({ idTheerakarn });

  idTheerakarn.forEach(async (v) => {
    // console.log(v);
    const response = await fetch(
      `https://dv-student-backend-2019.appspot.com/student/${v}`,
      {
        method: "DELETE",
        body: JSON.stringify(student),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.status === 200) {
      throw new Error("Delete failed");
    }
    const data = await response.json();
    console.log(data);
  });
};

function onLoad() {
  fetch("https://dv-student-backend-2019.appspot.com/students")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      // addStdToTableImg(index, data);
      data.forEach((v, i) => {
        addStdToTableImg(i + 1, v);
      });
    });

  // const dataStd = {
  //   studentId: "642110319",
  //   name: "Theerakarn",
  //   surname: "Maiwong",
  //   gpa: 5.0,
  //   image: "https://avatars.githubusercontent.com/u/75056575?v=4",
  // };

  // addStdToDb(dataStd);
}

// btn.addEventListener("click", () => {
// const input = document.getElementById("input-text").value;

// fetch(`https://dv-student-backend-2019.appspot.com/student/${input}`)
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     addStdToTableImg(index, data);
//     addStudentData(data);
//     index++;
//   })
//   .catch((err) => {
//     console.error(err);
//   });

//   delTheerakarn();
// });

btnSubmit.addEventListener("click", () => {
  const dataStd = {
    studentId: document.getElementById("stdId").value,
    name: document.getElementById("name").value,
    surname: document.getElementById("surname").value,
    gpa: parseInt(document.getElementById("gpa").value),
    image: document.getElementById("image").value,
  };

  for(let i = 0; i < 150; i++){
    addStdToDb(dataStd);
  }
});
