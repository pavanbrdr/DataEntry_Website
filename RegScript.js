let username = document.getElementById("un");
let password1 = document.getElementById("pwd1");
let password2 = document.getElementById("pwd2");
let phone = document.getElementById("phone");
let email = document.getElementById("eml");

function regs() {
    let un = username.value ;
    let pwd1 = password1.value ;
    let pwd2 = password2.value ;
    let phn = phone.value ;
    let eml = email.value ;

    if (un!="" && pwd1!="") {
        if(pwd1 === pwd2){
            let userData = new regData(un , pwd1 , phn , eml);
            localStorage.setItem("userdetails",JSON.stringify(userData));
            open("Login.html","_self");
        }
        else{
            alert("PASSWORD DOES NOT MATCH");
        }
    }
    else{
        alert("PLEASE FILL THE FIELDS");
    }
}
function regData(un , pass , phn , eml) {
    this.un = un ;
    this.pass = pass ;
    this.phn = phn;
    this.eml = eml;
}