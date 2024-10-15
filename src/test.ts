// if else 
var nilai: number = 79;

if (nilai>=90){
    console.log("Grade A");
} else if (nilai>=60){
    console.log("Grade B");
}else {
    console.log("C");
}

//Switch Else

var Hero: string="vexana"

switch(Hero){
    case "vexana":
        console.log("hero kesukaan");
        break
        case "zilong":
            console.log("kaka nya vexana");
            break
        default:
            console.log("Bapake vexana");
}

const Ipk: Number[] = [2,2,3,2,4];
for (let i=0; i < Ipk.length; i++){
    if (i==3){
        console.log(`nilai indexing ke 3 : $(Ipk[i]}`);
    }
}