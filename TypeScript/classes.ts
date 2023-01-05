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