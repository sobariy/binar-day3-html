function myProfile (nama, umur, hobi){
    if (umur <= 56) {
        return "Nama saya " + nama + ". Saya masih aktif bekerja. Umur saya " + umur + " Tahun. Saya Hobi " + hobi; 
    } else {
        return "Nama saya " + nama + ". Saya sudah pensiun. Umur saya " + umur + " Tahun. Saya Hobi " + hobi; 
    }
}

console.log(myProfile("Bambang", 66, "Memancing"));