class Home {
    private _numberOfRoom : number;
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
    //Tanimlandigi class ve Inherit eden classda 
    protected nameProtected:string
    //private tanimlandigi classdan
    private _namePrivate:string
    //Public heryerden
    public namePublic:string
    kaydet(){
        console.log("Kisi kaydedildi")
        console.log(this._namePrivate)
    }
}

class Musteri extends Kisi{
    satisYap(){
        
        console.log(this.nameProtected)
        console.log(this.namePublic)
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
