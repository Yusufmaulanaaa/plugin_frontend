// Function Deklaration
function sapa(nama : string, umur: number) {
    console.log("Halo, aku " + nama + " umurku " + umur);
}
sapa(" Yusuf " , 20)

//Anonymous function
const pcikers = function (name : string, role : string){
  return name + role 
}
let pick = pcikers("Zilong ", "Fighter")
console.log("Saya akan mengambil buff biru menggunakan " + pick) 

// Arrow Function 
let multiplication = (a : number, b : number) =>{
    return a * b
}
let result =  multiplication (8,7)
console.log(result);