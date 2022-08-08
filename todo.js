let form = document.getElementById("form");
let uInput = document.getElementById("nameInput");
let deptInput=document.getElementById("deptInput");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    formValidation();
  });
  let formValidation = () => {
    if (uInput.value === "" | deptInput.value === "") {
      msg.innerHTML = "*Fields Cannot be Empty";
    } else {
        msg.innerHTML = "";
        acceptData();
    }
  };
  let data = {};
  let acceptData = () => {
    data["username"] = uInput.value;
    data["department"]=deptInput.value;
    console.log(data);
    createFunc();
   };
  //localStorage.setItem("data", JSON.stringify(data));
  //let storedData=JSON.parse(localStorage.getItem("data"));
  console.log(data);
  let createFunc = () => {
    posts.innerHTML += `
    <div class="postContainer">
        <p>${data.username}</p>
        <p>${data.department}</p>
        <span class="options">
            <i onclick="editFunc(this)" class="material-symbols-outlined">edit_note</i>
            <i onclick="deleteFunc(this)" class="material-symbols-outlined">delete</i>
        </span>
    </div>
    `;
    uInput.value = "";
    deptInput.value="";
  };
  let deleteFunc = (e) => {
    e.parentElement.parentElement.remove();
  };
  let editFunc = (e) => {
    deptInput.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
    uInput.value = e.parentElement.previousElementSibling.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
  };