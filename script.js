//selecting id
var username = document.getElementById("inputName");
var age = document.getElementById("inputAge");
var checkRadio = document.getElementsByName("gender");
var email = document.getElementById("email");
var save = document.getElementById("save");
var table = document.getElementById("table");
var courses = document.getElementById("courseList");

save.addEventListener("click", function () {
 
  var row = table.insertRow(-1);

  var data = row.insertCell(0);
  var Name = document.createTextNode(username.value);
  data.appendChild(Name);

  data = row.insertCell(1);
  var Age = document.createTextNode(age.value);
  data.appendChild(Age);

  data = row.insertCell(2);
  var userGender = "";
  for (i = 0; i < checkRadio.length; i++) {
    if (checkRadio[i].checked) {
      userGender = checkRadio[i].value;
    }
  }
  var gender = document.createTextNode(userGender);
  data.appendChild(gender);

  data = row.insertCell(3);
  var course = document.createTextNode(courses.value);
  data.appendChild(course);

  data = row.insertCell(4);
  var mail = document.createTextNode(email.value);
  data.appendChild(mail);

  data = row.insertCell(5);
  var btn = document.createElement("button");
  btn.textContent = "Delete";
  btn.classList.add("delete");
  data.appendChild(btn);

  document.addEventListener("click", function (event) {
    if (event.target.classList.contains("delete")) {
      var d = event.target.parentNode.parentNode;
      d.parentNode.removeChild(d);
    }
  });
});
