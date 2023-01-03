var users = [
    { email: "burakyavas26@gmail.com", password: "123456" },
    { email: "burak@gmail.com", password: "123456" }
]

var tivitler = [
    { email: "burakyavas26@gmail.com", tivit: "Hello World" },
    { email: "burakyavas26@gmail.com", tivit: "Hello Burak" },
    { email: "burak@gmail.com", tivit: "Hello Burak" }
]

var email = prompt("email")
var password = prompt("sifre")

function usersCheck(email, password) {
    for (i = 0; i < users.length; i++) {
        if (users[i].email==email && users[i].password==password) {
            console.log(tivitler)
        }
    
    }
    console.log("Kullanici adi ve sifre hatali")
}

usersCheck(email,password)

// function login(){
//      if(usersCheck(email, password)){
//          console.log(tivitler)
//      }else{
//          console.log("Kullanici adi ve sifre hatali")
//      }
// }

// login(email,password)