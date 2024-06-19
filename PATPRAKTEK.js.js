// SOAL NO 1
class Gadget {
    constructor(brand, type){
        this.brand = brand;
        this.type = type;
    }
}

//SOAL NO 2
class Laptop extends Gadget {
    constructor(brand, type) {
        super(brand,type,true);
    }

    run() {
        return (this.brand + " sedang berjalan");
    }
}

//SOAL NO 3
class Phone extends Gadget {
    constructor(brand, type) {
        super(brand, type, false);
    }
    run() {
        return (this.brand + " sedang berjalan");
    }
}

//SOAL NO 4
const myLaptop = new Laptop("ASUS", "Zephyrus",);

//SOAL NO 5
const myPhone = new Phone("Samsung","S23");

//Output
console.log(myLaptop.run());
console.log(myPhone.run());
console.log(myLaptop);
console.log(myPhone);