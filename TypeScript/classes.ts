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

    //Getter ve Setter

    get name():string{
        return "Sayin :"+this._namePrivate
    }

    set name(newName:string){
        this._namePrivate = newName
    }


    kaydet(){
        
        console.log(`${this.name} kaydedildi`)
        //console.log(this._namePrivate)
    }
}

class Musteri extends Kisi{
    satisYap(){
        
        //console.log(this.nameProtected)
        //console.log(this.namePublic)
        console.log(`${this.name} Satis yapildi`)
        //alert(`${this.name} Satis yapildi`)
    }
}

class Personel extends Kisi{
    maasOde(){
        console.log(`${this.name} Maas odendi`)
    }
}

let personel = new Personel();
let musteri = new Musteri();

musteri.name = "Burak"
personel.name = "Meltem"

personel.maasOde();
personel.kaydet();

musteri.satisYap();
musteri.kaydet();
