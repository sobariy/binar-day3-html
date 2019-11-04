# Control FLow

## Pengertian Control Flow
Control Flow adalah sebuah urutan perintah dimana komputer mengeksekusi pernyataan dalam script. Kode di jalankan secara berurutan dalam sebuah script dari baris pertama hingga barik terakhir kecuali jika komputer menjalankan sebuah struktur yang mengubah aliran kontrol seperti kondisional dan loop.

## Contoh Control Flow

1. Statement IF
   if akan mengeksekusi suatu kode jika kondisi dimasukkan ke dalamnya true.

        ```var angka = 7;

            if (angka > 5) {
             alert("angka ini lebih besar dari 5");
        }```

2. Statement IF ... else
   Jika kita ingin mengeksekusi suatu kode bila secara default bila tidak ada kondisi yang sesuai dengan statement if sebelumnya, maka kita dapat menggunakan statement if else.
    ```var angka = 4;

        if (angka > 5) {
        alert("angka ini lebih besar dari 5");
        } else {
        alert("angka ini lebih kecil atau sama dengan 5");
        }```

3. Statement if .. else if.. else
    Kita bisa membuat program yang dapat mengevaluasi beberapa kondisi, untuk hal tersebut kita dapat memakai if .. else if .. else
    var bulan = 4;

        ```if (bulan === 0) {
        alert("Ini bulan Januari");
        } else if (bulan === 1) {
        alert("Ini bulan Februari");
        } else if (bulan === 2) {
        alert("Ini bulan Maret");
        } else if (bulan === 3) {
        alert("Ini bulan April");
        } else {
        alert("Bulan belum diketahui sistem");
        }```
        