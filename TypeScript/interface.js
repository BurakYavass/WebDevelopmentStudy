function save(product) {
    console.log(product.name + " kaydedildi");
}
//Butun degerlerin verilmesini istiyorsak interface kullanilmali
save({ id: 1, name: "Laptop", unitPrice: 10 });
var CustomerService = /** @class */ (function () {
    function CustomerService() {
    }
    CustomerService.prototype.save = function () {
        //throw new Error("Method not implemented.");
    };
    return CustomerService;
}());
