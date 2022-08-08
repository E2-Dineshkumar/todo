let form = document.getElementById("form");
let uInput = document.getElementById("nameInput");
let deptInput=document.getElementById("deptInput");
let regInput=document.getElementById("regInput");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    formValidation();
  });
  let formValidation = () => {
    if (uInput.value === "" | deptInput.value === "" | regInput.value==="") {
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
    data["reg"]=regInput.value;
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
        <p>${data.reg}</p>
        <span class="options">
            <i onclick="editFunc(this)" class="material-symbols-outlined">edit_note</i>
            <i onclick="deleteFunc(this)" class="material-symbols-outlined">delete</i>
        </span>
    </div>
    `;
    uInput.value = "";
    deptInput.value="";
    regInput.value="";
    //msg.innerHTML = "*Added!";
  };
  let deleteFunc = (e) => {
    e.parentElement.parentElement.remove();
    //msg.innerHTML = "*Deleted!";
  };
  let editFunc = (e) => {
    regInput.value=e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
    deptInput.value = e.parentElement.previousElementSibling.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
    uInput.value = e.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
  };