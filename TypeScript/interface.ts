interface IProduct{
    id : number;
    name : string;
    unitPrice : number;
}

function save(product:IProduct){
    console.log(product.name + " kaydedildi")
}

//Butun degerlerin verilmesini istiyorsak interface kullanilmali
save({id:1,name:"Laptop",unitPrice:10})


interface PersonService{
    save();
}

class CustomerService implements PersonService{
    save() {
        //throw new Error("Method not implemented.");
    }
    
}