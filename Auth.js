function setCookie(name, value, dayToLive) {
    const date = new Date();
    date.setTime(date.getTime() + dayToLive * 24 * 60 * 60 * 1000);
  
    const expires = "expires=" + date.toUTCString();
  
    document.cookie = `${name}=${value}; ${expires}; path=/`;
  }
  
  function getCookie(name) {
    const decodedCookies = decodeURIComponent(document.cookie);
  
    const cookiesArray = decodedCookies.split("; ");
  
    let result = null;
  
    cookiesArray.forEach((cookie) => {
      if (cookie.indexOf(name) === 0) {
        result = cookie.substring(name.length + 1);
      }
      
    });
  
    return result;
  }
  
  function deleteCookie(name) {
    setCookie(name, null, null);
  }
  
  
  function login() {
    const username = document.getElementById("username").value;
  
    const password = document.getElementById("password").value;
  
    if (username === "Islam" && password === "112358") {
      setCookie("loggedInUser", username, 3);
  
      document.getElementById("loggedIn").style.display = "block";
  
      document.getElementById("user").textContent = username;
  
      document.getElementById("loginForm").style.display = "none";
    // } else {
  
    //   window.alert("please enter a valid username or password");
    }
  }
  
  function logout() {
    deleteCookie("loggedInUser");
  
    document.getElementById("loginForm").style.display = "flex";
  
    document.getElementById("loggedIn").style.display = "none";
  }
  
  
  window.onload = function () {
    const loggedInAdmin = getCookie("loggedInUser");
  
    if (loggedInAdmin) {
      document.getElementById("loggedIn").style.display = "block";
  
      document.getElementById("user").textContent = loggedInAdmin;
  
      document.getElementById("loginForm").style.display = "none";
    }
  };

let input = document.querySelector(".input");
let submit = document.querySelector(".add");
let taskDivs = document.querySelector(".tasks");


let arrayOfTasks = [];
getDataFromLocal();
if (localStorage.getItem("tasks")) {
  arrayOfTasks = JSON.parse(localStorage.getItem("tasks"));
}

submit.onclick = function () {
  if (input.value !== "") {
    addTask(input.value);
    input.value = "";
  }else{
    window.alert('Please Enter a Task');
  }
};

taskDivs.addEventListener("click", (e) => {
  if (e.target.classList.contains("edit")) {
    let taskId = e.target.parentElement.getAttribute("task-id");
    let taskElemnt = e.target.parentElement;
    let taskTitle = taskElemnt.firstChild.textContent;

    let inputEdit = document.createElement("input");
    inputEdit.type = "text";
    inputEdit.value = taskTitle;
    inputEdit.className = "edit-input";

    taskElemnt.firstChild.replaceWith(inputEdit);

    e.target.textContent = "save";
    e.target.className = "save";

    e.target.removeEventListener("click", handleEdit);
    e.target.addEventListener("click", ()=>{handleSave(taskId, taskElemnt)});
  }
  if (e.target.classList.contains("del")) {
    deleteTask(e.target.parentElement.getAttribute("task-id"));
  }
});

function handleEdit(e) {
  let taskId = e.target.parentElement.getAttribute("task-id");
  let taskElemnt = e.target.parentElement;
  let taskTitle = taskElemnt.firstChild.textContent;

  let inputEdit = document.createElement("input");
  inputEdit.type = "text";
  inputEdit.value = taskTitle;
  inputEdit.className = "edit-input";

  taskElemnt.firstChild.replaceWith(inputEdit);

  e.target.textContent = "save";
  e.target.className = "save";

  e.target.removeEventListener("click", handleEdit);
target.addEventListener("click", ()=>{handleSave(taskId, taskElemnt)});
}

function handleSave(taskId, taskElemnt) {
  let editInput = taskElemnt.querySelector(".edit-input");
  let newTitle = editInput.value;

  arrayOfTasks.forEach((task) => {
    if (task.id == taskId) {
      task.title = newTitle;
    }
  });
  addDataToLocal(arrayOfTasks);
  addElements(arrayOfTasks);

  taskElemnt.firstChild.replaceWith(newTitle);

  let btn = taskElemnt.querySelector(".save");
  btn.textContent = "edit";
  btn.className = "edit";

  btn.removeEventListener("click", handleSave);
  btn.addEventListener("click", handleEdit);
}

function addTask(task) {
  let taskObj = {
    id: Date.now(),
    title: task,
    completed: false,
  };
  arrayOfTasks.push(taskObj);
  addElements(arrayOfTasks);
  addDataToLocal(arrayOfTasks);
}
var eles  ; 
function addElements(eles) {
  taskDivs.innerHTML = "";
  if (Array.isArray(eles))  {
  eles.forEach(function (ele) {
    let div = document.createElement("div");
    div.className = "task";
    div.setAttribute("task-id", ele.id);
    div.appendChild(document.createTextNode(ele.title));
    let span = document.createElement("span");
    span.appendChild(document.createTextNode("Delete"));
    span.className = "del";
    div.appendChild(span);
    let edit = document.createElement("span");
    edit.className = "edit";
    edit.appendChild(document.createTextNode("Edit"));
    div.appendChild(edit);
    taskDivs.appendChild(div);
  });}
}

function addDataToLocal(arrayOfTasks) {
  localStorage.setItem("tasks", JSON.stringify(arrayOfTasks));
}

function getDataFromLocal() {
  let data = localStorage.getItem("tasks");
  addElements(JSON.parse(data));
}

function deleteTask(taskId) {
  arrayOfTasks = arrayOfTasks.filter((ele) => ele.id != taskId);
  addDataToLocal(arrayOfTasks);
  addElements(arrayOfTasks);
}





























































































































