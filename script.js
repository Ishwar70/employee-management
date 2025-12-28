let employees = [];
let idCounter = 1;

function addEmployee() {
  const name = document.getElementById("name").value.trim();
  const profession = document.getElementById("profession").value.trim();
  const age = document.getElementById("age").value.trim();
  const message = document.getElementById("message");

  // Error check
  if (name === "" || profession === "" || age === "") {
    message.textContent = "Error : Please Make sure All the fields are filled before adding in an employee !";
    message.className = "error";
    return;
  }

  // Add employee object
  const employee = {
    id: idCounter++,
    name,
    profession,
    age
  };

  employees.push(employee);

  message.textContent = "Success : Employee Added!";
  message.className = "success";

  document.getElementById("name").value = "";
  document.getElementById("profession").value = "";
  document.getElementById("age").value = "";

  renderEmployees();
}

function renderEmployees() {
  const list = document.getElementById("employee-list");
  const count = document.getElementById("count");

  list.innerHTML = "";

  count.textContent = `You have ${employees.length} Employees.`;

  employees.forEach(emp => {
    const div = document.createElement("div");
    div.className = "employee";

    div.innerHTML = `
      <span>${emp.id}.</span>
      <span>Name : ${emp.name}</span>
      <span>Profession : ${emp.profession}</span>
      <span>Age : ${emp.age}</span>
      <button class="delete-btn" onclick="deleteEmployee(${emp.id})">Delete User</button>
    `;

    list.appendChild(div);
  });
}

function deleteEmployee(id) {
  employees = employees.filter(emp => emp.id !== id);
  renderEmployees();
}
