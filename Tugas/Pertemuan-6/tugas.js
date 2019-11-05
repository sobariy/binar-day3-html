
// Membuat Function dengan 3 parameter
// function myProfile (nama, umur, hobi){
//     if (umur <= 56) {
//         return "Nama saya " + nama + ". Saya masih aktif bekerja. Umur saya " + umur + " Tahun. Saya Hobi " + hobi; 
//     } else {
//         return "Nama saya " + nama + ". Saya sudah pensiun. Umur saya " + umur + " Tahun. Saya Hobi " + hobi; 
//     }
// }

// console.log(myProfile("Bambang", 66, "Memancing"));

let myProfile = (nama, umur, hobi) => { 
    if (umur <= 56) {
    console.log (`Nama saya ${nama}. Saya masih aktif bekerja. Umur saya ${umur} Tahun. Saya Hobi ${hobi}`); 
} else {
    console.log (`Nama saya ${nama}. Saya sudah pensiun bekerja. Umur saya ${umur} Tahun. Saya Hobi ${hobi}`); 
}
}

console.log(myProfile(`Bambang`, 55, `Tidur`))