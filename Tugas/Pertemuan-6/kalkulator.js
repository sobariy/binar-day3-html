
function kalkulator(oper, angka1, angka2){
    switch (oper) {
        case "pertambahan":
            return angka1 + angka2;
            break;
        case "pengurangan":
            return angka1 - angka2;
            break;
        case "perkalian":
            return angka1 * angka2;
            break;
        case "eksponensial":
            return angka1 % angka2;
            break;
        case "pembagian":
            return angka1 / angka2;
            break;
        default:
            return "yang benerlah";
    }
}

console.log (kalkulator("pertambahan", 10, 5))
console.log (kalkulator("pengurangan", 10, 5))
console.log (kalkulator("pembagian", 10, 5))
console.log (kalkulator("eksponensial", 10, 5))
console.log (kalkulator("perkalian", 10, 5))
console.log (kalkulator(10, 5, "pembagian"))
