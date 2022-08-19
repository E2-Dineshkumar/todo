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
      openTheForm();
    } else {
        msg.innerHTML = "";
        //msg.innerHTML="Added!";
        acceptData();
    }
  };
  let data = [];
  let acceptData = () => {
    data.push({
      username:uInput.value,
      department:deptInput.value
    });
    //data["username"] = uInput.value;
    //data["department"]=deptInput.value;
    localStorage.setItem("data",JSON.stringify(data));
    //data=JSON.parse(localStorage.getItem("data"))||[];
    console.log(data);
    createFunc();
  };
  //localStorage.setItem("data", JSON.stringify(data));
  //let storedData=JSON.parse(localStorage.getItem("data"));
  console.log(data);
  let createFunc = () => {
    postContainer.innerHTML="";
    data.map((x,y) => {
      return ( postContainer.innerHTML += `
        <div id=${y} class="postContainer">
          <p>${x.username}</p>
          <p>${x.department}</p>
          <span class="options">
              <i onclick="editFunc(this),openTheForm()" class="material-symbols-outlined">edit_note</i>
              <i onclick="deleteFunc(this)" class="material-symbols-outlined">delete</i>
          </span>
        </div>
      `);
    });
    resetForm();
  };
  let resetForm = () =>{
    uInput.value = "";
    deptInput.value="";
  };
    //msg.innerHTML = "*Added!";
  //};
  let deleteFunc = (e) => {
  //  e.parentElement.parentElement.remove();
  //  data.splice(e.parentElement.parentElement.id, 1);
  //  localStorage.setItem("data", JSON.stringify(data));
    var ans =confirm("Are you Sure to delete this Data?")
    if (ans===true){
      e.parentElement.parentElement.remove();
      data.splice(e.parentElement.parentElement.id, 1);
      localStorage.setItem("data", JSON.stringify(data));  
    }else{null}
    //localStorage.removeItem("data")
    //alert('Deleted!');
    //msg.innerHTML = "*Deleted!";
  };
  let editFunc = (e) => {
    var edit=confirm("Do you want to Edit this data?")
    if (edit===true){
      e.parentElement.parentElement.remove();
      data.splice(e.parentElement.parentElement.id, 1);
      let selectedTask = e.parentElement.parentElement;
      uInput.value=selectedTask.children[0].innerHTML;
      deptInput.value=selectedTask.children[1].innerHTML;
    }else{null}
    //e.parentElement.parentElement.remove();
    //postContainer.innerHTML="";
    //deleteFunc();
    // let selectedTask = e.parentElement.parentElement;
    // uInput.value=selectedTask.children[0].innerHTML;
    // deptInput.value=selectedTask.children[1].innerHTML;
    // deleteFunc(e);
    //deptInput.value=json.parse(localStorage.getItem("data"))
    //deptInput.value=e.parentElement.previousElementSibling.innerHTML;
    //e.parentElement.parentElement.remove();
    //uInput.value=json.parse(localStorage.getItem("data"))
    //uInput.value = e.parentElement.previousElementSibling.previousElementSibling.innerHTML;
    //e.parentElement.parentElement.remove();
  };
  function openTheForm() {
    document.getElementById("leftContainer").style.display = "flex";
  }
  function closeTheForm() {
    document.getElementById("leftContainer").style.display = "none";
  }
  function openDelForm() {
    document.getElementById("delPopupDiv").style.display = "flex";
  }
  function closeDelForm() {
    document.getElementById("delPopupDiv").style.display = "none";
  }
  // let delVal = () => {
  //   postContainer.innerHTML="";
  //   data.map((x,y) => {
  //     return ( postContainer.innerHTML += `
  //       <div class="delPopupDiv" id="delPopupDiv">
  //         <div class="delpopHeader">
  //           <span>Are you sure?</span>
  //         </div>
  //         <div class="delpopMsg">
  //           <span>To Delete this Form Details</span>
  //         </div>
  //         <div class="delpopBtn">
  //           <button id="yesBtn" onclick="closeDelForm(),remove()">Yes</button>
  //           <button id="noBtn" onclick="acceptData()">No</button>
  //         </div>
  //       </div>
  //     `);
  //   });
  //   resetForm();
  // };

  


// let form = document.getElementById("form");
// let uInput = document.getElementById("nameInput");
// let deptInput=document.getElementById("deptInput");
// let msg = document.getElementById("msg");
// let posts = document.getElementById("posts");
//   form.addEventListener("submit", (e) => {
//       e.preventDefault();
//       formValidation();
//     });
//   let formValidation = () => {
//     if (uInput.value === "" | deptInput.value === "") {
//       msg.innerHTML = "*Fields Cannot be Empty";
//       openTheForm();
//     } else {
//         msg.innerHTML = "";
//         //msg.innerHTML="Added!";
//         acceptData();
//     }
//   };
//   let data = [];
//   let acceptData = () => {
//     data.push({
//       username:uInput.value,
//       department:deptInput.value
//     });
//     //data["username"] = uInput.value;
//     //data["department"]=deptInput.value;
//     localStorage.setItem("data",JSON.stringify(data));
//     //data=JSON.parse(localStorage.getItem("data"))||[];
//     console.log(data);
//     createFunc();
//   };
//   //localStorage.setItem("data", JSON.stringify(data));
//   //let storedData=JSON.parse(localStorage.getItem("data"));
//   console.log(data);
//   let createFunc = () => {
//     postContainer.innerHTML="";
//     data.map((x,y) => {
//       return ( postContainer.innerHTML += `
//         <div id=${y} class="postContainer">
//           <p>${x.username}</p>
//           <p>${x.department}</p>
//           <span class="options">
//               <i onclick="editFunc(this),openTheForm()" class="material-symbols-outlined">edit_note</i>
//               <i onclick="deleteFunc(this),openDelForm()" class="material-symbols-outlined">delete</i>
//           </span>
//         </div>
//       `);
//     });
//     resetForm();
//   };
//   let resetForm = () =>{
//     uInput.value = "";
//     deptInput.value="";
//   };
//     //msg.innerHTML = "*Added!";
//   //};
//   let deleteFunc = (e) => {
//     e.parentElement.parentElement.remove();
//     data.splice(e.parentElement.parentElement.id, 1);
//     localStorage.setItem("data", JSON.stringify(data));
//     //localStorage.removeItem("data")
//     //alert('Deleted!');
//     //msg.innerHTML = "*Deleted!";
//   };
//   let editFunc = (e) => {
//     let selectedTask = e.parentElement.parentElement;
//     uInput.value=selectedTask.children[0].innerHTML;
//     deptInput.value=selectedTask.children[1].innerHTML;
//     deleteFunc(e);
//     //deptInput.value=json.parse(localStorage.getItem("data"))
//     //deptInput.value=e.parentElement.previousElementSibling.innerHTML;
//     //e.parentElement.parentElement.remove();
//     //uInput.value=json.parse(localStorage.getItem("data"))
//     //uInput.value = e.parentElement.previousElementSibling.previousElementSibling.innerHTML;
//     //e.parentElement.parentElement.remove();
//   };
//   function openTheForm() {
//     document.getElementById("leftContainer").style.display = "flex";
//   }
//   function closeTheForm() {
//     document.getElementById("leftContainer").style.display = "none";
//   }
//   function openDelForm() {
//     document.getElementById("delPopupDiv").style.display = "flex";
//   }
//   function closeDelForm() {
//     document.getElementById("delPopupDiv").style.display = "none";
//   }
//   // let delVal = () => {
//   //   postContainer.innerHTML="";
//   //   data.map((x,y) => {
//   //     return ( postContainer.innerHTML += `
//   //       <div class="delPopupDiv" id="delPopupDiv">
//   //         <div class="delpopHeader">
//   //           <span>Are you sure?</span>
//   //         </div>
//   //         <div class="delpopMsg">
//   //           <span>To Delete this Form Details</span>
//   //         </div>
//   //         <div class="delpopBtn">
//   //           <button id="yesBtn" onclick="closeDelForm(),remove()">Yes</button>
//   //           <button id="noBtn" onclick="acceptData()">No</button>
//   //         </div>
//   //       </div>
//   //     `);
//   //   });
//   //   resetForm();
//   // };

  
// //previous

// // let form = document.getElementById("form");
// // let uInput = document.getElementById("nameInput");
// // let deptInput=document.getElementById("deptInput");
// // let msg = document.getElementById("msg");
// // let posts = document.getElementById("posts");
// //   form.addEventListener("submit", (e) => {
// //       e.preventDefault();
// //       formValidation();
// //     });
// //   let formValidation = () => {
// //     if (uInput.value === "" | deptInput.value === "") {
// //       msg.innerHTML = "*Fields Cannot be Empty";
// //     } else {
// //         msg.innerHTML = "";
// //         //msg.innerHTML="Added!";
// //         acceptData();
// //     }
// //   };
// //   let data = [];
// //   let acceptData = () => {
// //     data.push({
// //       username:uInput.value,
// //       department:deptInput.value
// //     });
// //     //data["username"] = uInput.value;
// //     //data["department"]=deptInput.value;
// //     localStorage.setItem("data",JSON.stringify(data));
// //     //data=JSON.parse(localStorage.getItem("data"))||[];
// //     console.log(data);
// //     createFunc();
// //   };
// //   //localStorage.setItem("data", JSON.stringify(data));
// //   //let storedData=JSON.parse(localStorage.getItem("data"));
// //   console.log(data);
// //   let createFunc = () => {
// //     postContainer.innerHTML="";
// //     data.map((x,y) => {
// //       return ( postContainer.innerHTML += `
// //         <div id=${y} class="postContainer">
// //           <p>${x.username}</p>
// //           <p>${x.department}</p>
// //           <span class="options">
// //               <i onclick="editFunc(this)" class="material-symbols-outlined">edit_note</i>
// //               <i onclick="deleteFunc(this)" class="material-symbols-outlined">delete</i>
// //           </span>
// //         </div>
// //       `);
// //     });
// //     resetForm();
// //   };
// //   let resetForm = () =>{
// //     uInput.value = "";
// //     deptInput.value="";
// //   };
// //     //msg.innerHTML = "*Added!";
// //   //};
// //   let deleteFunc = (e) => {
// //     e.parentElement.parentElement.remove();
// //     data.splice(e.parentElement.parentElement.id, 1);
// //     localStorage.setItem("data", JSON.stringify(data));
// //     //localStorage.removeItem("data")
// //     //alert('Deleted!');
// //     //msg.innerHTML = "*Deleted!";
// //   };
// //   let editFunc = (e) => {
// //     let selectedTask = e.parentElement.parentElement;
// //     uInput.value=selectedTask.children[0].innerHTML;
// //     deptInput.value=selectedTask.children[1].innerHTML;
// //     deleteFunc(e);
// //     //deptInput.value=json.parse(localStorage.getItem("data"))
// //     //deptInput.value=e.parentElement.previousElementSibling.innerHTML;
// //     //e.parentElement.parentElement.remove();
// //     //uInput.value=json.parse(localStorage.getItem("data"))
// //     //uInput.value = e.parentElement.previousElementSibling.previousElementSibling.innerHTML;
// //     //e.parentElement.parentElement.remove();
// //   };
// //   function openTheForm() {
// //     document.getElementById("popContainer").style.display = "flex";
// //   }
// //   function closeTheForm() {
// //     document.getElementById("popContainer").style.display = "none";
// //   }