// define parameter oper, angka1, angka2
let kalkulator = (oper, angka1, angka2) => {
    switch (oper) { //switch case
        case `pertambahan`:
            text = `Hasil dari ${oper} ${angka1} dan ${angka2} adalah ${angka1 + angka2}`;
            break;
        case `pengurangan`:
            text = `Hasil dari ${oper} ${angka1} dan ${angka2} adalah ${angka1 - angka2}`;
            break;
        case `perkalian`:
            text = `Hasil dari ${oper} ${angka1} dan ${angka2} adalah ${angka1 * angka2}`;
            break;
        case `eksponensial`:
            text = `Hasil dari ${oper} ${angka1} dan ${angka2} adalah ${angka1 % angka2}`;
            break;
        case `pembagian`:
            text = `Hasil dari ${oper} ${angka1} dan ${angka2} adalah ${angka1 / angka2}`;
            break;
        default:
            text = `yang bener dongs`;
    }
    return text;
}
 console.log (kalkulator('pertambahan', 10, 5));
 console.log (kalkulator("pengurangan", 10, 5))
 console.log (kalkulator("pembagian", 10, 5))
 console.log (kalkulator("eksponensial", 10, 5))
 console.log (kalkulator("perkalian", 10, 5))
 console.log (kalkulator(10, 5, "pembagian"))


