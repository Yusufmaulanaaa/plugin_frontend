"use strict";
class Person {
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    greet() {
        console.log(`Hi, nama saya ${this.name} rumah saya di Kota ${this.address}`);
    }
}
class Employe extends Person {
    constructor(name, address, Jobtittle) {
        super(name, address);
        this.jobTittle = Jobtittle;
    }
    work() {
        console.log(`aku ${this.name} bekerja sebagai ${this.jobTittle}`);
    }
}
let employe1 = new Employe('Yusuf', "Tegal", 'Offshore');
employe1.greet();
employe1.work();
