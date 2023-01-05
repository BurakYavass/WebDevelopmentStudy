var hiFunction = function hi(){
    console.log("Merhaba")
}

hiFunction()

const hiFunction1 = () =>{
    console.log("Merhaba")
}

hiFunction1()

const hiFunction2 = (mesaj, mesaj2) =>{
    console.log(mesaj,mesaj2)
}

hiFunction2("Hello World")

var addition = (sayi1,sayi2)=>{
    return sayi1+sayi2
}

let summit = addition(2,3)
console.log(summit)