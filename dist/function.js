"use strict";
// Function Deklaration
function sapa(nama, umur) {
    console.log("Halo, aku " + nama + " umurku " + umur);
}
sapa(" Yusuf ", 20);
//Anonymous function
const pcikers = function (name, role) {
    return name + role;
};
let pick = pcikers("Zilong ", "Fighter");
console.log("Saya akan mengambil buff biru menggunakan " + pick);
// Arrow Function 
let multiplication = (a, b) => {
    return a * b;
};
let result = multiplication(8, 7);
console.log(result);
