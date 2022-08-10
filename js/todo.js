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
        //msg.innerHTML="Added!";
        acceptData();
    }
  };
  let data = {};
  let acceptData = () => {
    data["username"] = uInput.value;
    data["department"]=deptInput.value;
    localStorage.setItem("data",JSON.stringify(data))
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
    //msg.innerHTML = "*Added!";
  };
  let deleteFunc = (e) => {
    e.parentElement.parentElement.remove();
    //localStorage.removeItem("data")
    //alert('Deleted!');
    //msg.innerHTML = "*Deleted!";
  };
  let editFunc = (e) => {
    //deptInput.value=json.parse(localStorage.getItem("data"))
    deptInput.value=e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
    //uInput.value=json.parse(localStorage.getItem("data"))
    uInput.value = e.parentElement.previousElementSibling.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
  };
  function openTheForm() {
    document.getElementById("popContainer").style.display = "flex";
  }
  function closeTheForm() {
    document.getElementById("popContainer").style.display = "none";
  }