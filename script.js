var add = document.getElementById("add");
var removeFirst = document.getElementById("remove-first");
var removeLast = document.getElementById("remove-last");
var names = document.getElementById("names");
var surname = document.getElementById("surname");
var age = document.getElementById("age");
var table = document.getElementById("list");

// Adds row to table
function addRow(name, surname, age) {
  var row = table.insertRow(-1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  cell1.innerHTML = name;
  cell2.innerHTML = surname;
  cell3.innerHTML = age;
}

// Resets
function resetInputs() {
  names.value = "";
  surname.value = "";
  age.value = "";
}

add.addEventListener("click", function() {
  var valid = true;

  if(!names.value){
    valid = false;
  }

  if(!surname.value){
    valid = false;
  }

  if(!age.value || age.value <= 0){
    valid = false;
  }

  if(!valid) {
    alert('Įveskite duomenis');
    return;
  }

  // Add
  addRow(names.value, surname.value, age.value);
  // Reset
  resetInputs();
});

removeFirst.addEventListener("click", function() {
  if(table.rows.length <= 1) {
    alert('Nėra ką trinti');
    return;
  }
  table.deleteRow(1);
});

removeLast.addEventListener("click", function() {
  if(table.rows.length <= 1) {
    alert('Nėra ką trinti');
    return;
  }
  table.deleteRow(table.rows.length -1);
});
