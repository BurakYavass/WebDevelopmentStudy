abstract class KrediBase {
    //private _krediToplam:number;
    private _vadeToplam:number;
    
    constructor() {
        
    }
    save(_krediToplam):void{
        console.log(`${_krediToplam} Kaydedildi`)
    }
    abstract calculate():void
}

class TuketiciKredi extends KrediBase{
    constructor(){
        super();
    }

    calculate(): void {
        console.log(`Tuketici kredisine gore hesap yapildi` )
    }
}

class KonutKredi extends KrediBase{
    constructor(){
        super();
    }

    calculate(): void {
        console.log("Konut kredisine gore hesap yapildi")
    }
    
}

let tuketiciKredisi = new TuketiciKredi();
tuketiciKredisi.save(1000);
tuketiciKredisi.calculate();

let konutKredisi = new KonutKredi();
konutKredisi.save(2000);
konutKredisi.calculate()

let kredi : KrediBase
kredi = new TuketiciKredi;

kredi = new KonutKredi;