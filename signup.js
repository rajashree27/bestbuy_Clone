document.querySelector("form").addEventListener("submit", usersubmit);
var registereduser = JSON.parse(localStorage.getItem("registereduser")) || [];

function usersubmit() {
    event.preventDefault();
    var name = document.querySelector("#name").value;
    var email = document.querySelector("#email").value;
    var re_email = document.querySelector("#confirm-email").value;
    var password = document.querySelector("#password").value;
    var re_password = document.querySelector("#confirm-password").value;
    var mobile = document.querySelector("#mobile").value;


    var obj = {
        name: name,
        email: email,
        remail: re_email,
        password: password,
        repassword: re_password,
        mobile: mobile,
   
    }

    // console.log(obj);
    var dangerName = document.querySelector(".name");
    var dangerEmail = document.querySelector(".email");
    var dangerPassword = document.querySelector(".password");
    var dangerRepassword = document.querySelector(".repassword");
    var dangerReEmail = document.querySelector(".remail");
   
    if (name == "") {
        dangerName.style.display = "block";
    } else {
        dangerName.style.display = "none";
    }
    if (email == "") {
        dangerEmail.style.display = "block";
    } else {
        dangerEmail.style.display = "none";
    }
    if (password == "") {
        dangerPassword.style.display = "block";
    } else {
        dangerPassword.style.display = "none";
    }
    if (password != re_password) {
        dangerRepassword.style.display = "block";
    } else {
        dangerRepassword.style.display = "none";
    }
    if (email != re_email) {
        dangerReEmail.style.display = "block";
    } else {
        dangerReEmail.style.display = "none";
    }

    if (name!= "" && email!= "" && password!="" && re_password!="") {
      /*   console.log("sdfg") */
      registereduser.push(obj);
      localStorage.setItem("registereduser", JSON.stringify(registereduser));
      alert('Account created successfully');
      window.location.href = "signin.html";
      
    } else {
       /*  window.localStorage.clear(); */
      
    }
}

// localStorage.clear();
