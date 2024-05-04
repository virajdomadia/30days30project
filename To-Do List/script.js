let inputBox = document.querySelector(".addTaskForm input");
let addBtn = document.querySelector("#add-task-btn");
let todoList = document.querySelector(".todoList");

showTask();

addBtn.addEventListener("click", () => {
  let task = inputBox.value;
  if (task === "") {
    alert("please enter a value");
  } else {
    let getLocalStorageData = localStorage.getItem("new Todo");
    if (getLocalStorageData == null) {
      listArray = [];
    } else {
      listArray = JSON.parse(getLocalStorageData);
    }
    listArray.push(task);
    localStorage.setItem("new Todo", JSON.stringify(listArray));
    showTask();
    addBtn.classList.remove("active");
  }
});

function showTask() {
  let getLocalStorageData = localStorage.getItem("new Todo");
  if (getLocalStorageData == null) {
    listArray = [];
  } else {
    listArray = JSON.parse(getLocalStorageData);
  }
  let newLiTag = "";
  listArray.forEach((element, index) => {
    newLiTag += `<li>${element}<span class="icon" onclick="deleteTask(${index})"><i class="fas fa-trash"></i></span></li>`;
  });
  todoList.innerHTML = newLiTag;
  inputBox.value = "";
}

function deleteTask(index) {
  let getLocalStorageData = localStorage.getItem("new Todo");
  if (getLocalStorageData !== null) {
    listArray = JSON.parse(getLocalStorageData);
    listArray.splice(index, 1);
    localStorage.setItem("new Todo", JSON.stringify(listArray));
    showTask();
  } else {
    console.error("Error: Unable to retrieve data from local storage.");
  }
}
