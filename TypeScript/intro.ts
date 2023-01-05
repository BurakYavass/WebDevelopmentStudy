function greeter(name : string){
    return "Hello " + name
}

let mesaj = greeter("burak")

console.log(mesaj)

let sayi:number;
sayi = 10
sayi = 10.4

let city : string = "Eskisehir"
city = "Ankara"
city = "Istanbul"

let dogruMu : boolean
dogruMu = false;
dogruMu = true;

let numbers:number[] = [1,2,3]
let numbers2 : Array<number> = [1,2,3]

let dizi :[number,string] = [2,"Ankara"]

dizi[1] = "istanbul"

enum Color{Red,Black,Blue}
let colors = Color.Black;
