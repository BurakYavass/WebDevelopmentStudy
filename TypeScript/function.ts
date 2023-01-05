function topla(x:number,y:number):number{
    return x+y;

}

function topla1(x,y){
    return x+y;
}

let topla2 = function(x:number,y:number):number{
    return x+y;
}

console.log(topla(2,3))
console.log(topla2(5,2))
console.log(topla1(1,"Ankara"))

function topla3(x:number,y:number = 4):number{
    return x+y;
}

console.log(topla3(3))

function topla4(x:number,y?:number):number{
    if(y) {
        return x+y;
    }
    return x;
}

console.log(topla4(10))


function invite(firstGuest:string,...others:string[]):string{
    return firstGuest + " " + others.join(" ");
}

console.log("Burak","Meltem", " Monster","Silence", "Maya");
