var mail = document.getElementById("mail")
var password = document.getElementById("password")

function login(){
    if(mail === "admin" && password === "admin123"){
        console.log("Login Successfully");
    }
    else {
        console.log("Invalid Credentials");
    }
}