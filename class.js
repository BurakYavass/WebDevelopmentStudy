class Personel{

    constructor(ad,surName){
        this.ad = ad;
        this.surName = surName;
    }
    personelSave(){
        console.log(`Personel kaydedildi. : ${this.ad}`)
        if(this.ad && this.surName){
            console.log(this.ad,this.surName)
            alert(this.ad+" "+this.surName)
        }
    }
}

const personel = new Personel("Burak","Yavas");

personel.personelSave();