class Home {
    _numberOfRoom : number;
    _numberOfWindow : number;
    _floor : number;
    constructor(numberOfRoom:number,numberOfWindow:number,floor:number) {
        this._numberOfRoom =numberOfRoom;
        this._numberOfWindow = numberOfWindow;
        this._floor = floor;   
    }
}
let home = new Home(3,4,5);

console.log(home._floor)

class Kisi{
    kaydet(){
        console.log("Kisi kaydedildi")
    }
}

class Musteri extends Kisi{
    satisYap(){
        console.log("Satis yapildi")
    }
}

class Personel extends Kisi{
    maasOde(){
        console.log("Maas odendi")
    }
}

let personel = new Personel();
let musteri = new Musteri();

personel.maasOde();
personel.kaydet();

musteri.satisYap();
musteri.kaydet();
