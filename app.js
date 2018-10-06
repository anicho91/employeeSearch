const displayEmployee = function() {
  let eList = "";
  for (let i = 0; i < employeeList.length; i++) {
    eList += `<div style="border: 1px solid grey; padding-right: 200px; padding-left: 5px; margin-top: 10px;"><p>${employeeList[i].name}</p> <p>${
      employeeList[i].officeNum
    }</p> <p>${employeeList[i].phoneNum}</p> </div>`;
  }

  render(eList);
};

const userInputs = function() {
  const name1 = $("#empName").val();
  const oNum = $("#officeNum").val();
  const pNum = $("#phoneNum").val();
  console.log(name1, oNum, pNum);
  $("#empName").val("");
  $("#phoneNum").val("");
  $("#officeNum").val("");
  employeeList.push({
    name: name1,
    officeNum: oNum,
    phoneNum: pNum
  });
  console.log(employeeList);
  showList.style.visibility = "visible";
  displayEmployee();
};

const showList = document.getElementById("viewList");
const addList = document.getElementById("viewList");
const verList = document.getElementById("verifyA");
const updateList = document.getElementById("viewList");
const removeList = document.getElementById("viewList");

const verifyFunc = function() {
  const name1 = $("#searchEmp").val();
  $("#searchEmp").val("");
  let verInput = "no";
  verList.innerHTML = "No";
  for (let i = 0; i < employeeList.length; i++) {
    if (employeeList[i].name === name1) {
      verInput = "yes";
      verList.innerHTML = `<br><br>Yes`;
    }
  }
  console.log(verInput);
};

const updateFunc = function() {
  const name1 = $("#empName2").val();
  const oNum = $("#officeNum2").val();
  const pNum = $("#phoneNum2").val();

  $("#empName2").val("");
  $("#phoneNum2").val("");
  $("#officeNum2").val("");

  for (let i = 0; i < employeeList.length; i++) {
    if (employeeList[i].name === name1) {
      employeeList[i].officeNum = oNum;
      employeeList[i].phoneNum = pNum;
    }
  }
  showList.style.visibility = "visible";
  console.log(oNum);
  displayEmployee();
};

const delFunc = function() {
  const name1 = $("#searchEmp2").val();

  $("#searchEmp2").val("");

  for (let i = 0; i < employeeList.length; i++) {
    if (employeeList[i].name === name1) {
      employeeList.splice(i, 1);
    }
  }
  showList.style.visibility = "visible";
  displayEmployee();
};

const showView = function() {
  showList.style.visibility = "visible";
  verList.style.visibility = "hidden";
  form1.style.visibility = "hidden";
  form2.style.visibility = "hidden";
  form3.style.visibility = "hidden";
  form4.style.visibility = "hidden";
  displayEmployee();
};

const showAdd = function() {
  $("#viewListP").empty();
  verList.style.visibility = "hidden";
  showList.style.visibility = "hidden";
  form1.style.visibility = "visible";
  form2.style.visibility = "hidden";
  form3.style.visibility = "hidden";
  form4.style.visibility = "hidden";
};

const showVerify = function() {
  $("#viewListP").empty();
  form2.style.visibility = "visible";
  verList.style.visibility = "visible";
  showList.style.visibility = "hidden";
  form1.style.visibility = "hidden";
  form3.style.visibility = "hidden";
  form4.style.visibility = "hidden";
};

const showUpdate = function() {
  $("#viewListP").empty();
  verList.style.visibility = "hidden";
  showList.style.visibility = "hidden";
  form1.style.visibility = "hidden";
  form2.style.visibility = "hidden";
  form3.style.visibility = "visible";
  form4.style.visibility = "hidden";
};

const showDelete = function() {
    $("#viewListP").empty();
    verList.style.visibility = "hidden";
    showList.style.visibility = "hidden";
    form1.style.visibility = "hidden";
    form2.style.visibility = "hidden";
    form3.style.visibility = "hidden";
    form4.style.visibility = "visible";
  };

const render = function(eList) {
  $("#viewListP").html(eList);
};

$("#view").on("click", showView);
$("#verify").on("click", showVerify);
$("#add").on("click", showAdd);
$("#update").on("click", showUpdate);
$("#delete").on("click", showDelete);
$("#submit").on("click", userInputs);
$("#submit2").on("click", updateFunc);
$("#search").on("click", verifyFunc);
$("#search2").on("click", delFunc);
