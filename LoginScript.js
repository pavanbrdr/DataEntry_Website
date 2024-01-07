let username = document.getElementById("un");
let password = document.getElementById("pass");

function login() {
    username=username.value ;
    password=password.value ;

    let userData = JSON.parse(localStorage.getItem("userdetails"));

    if ((username===userData.un) && (password===userData.pass)) {
     
        open("HomePage.html","_self");  
    }
    else{
        alert("INVALID CREDENTIALS");
    }
}