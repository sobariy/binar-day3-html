# Operator

## Pengertian Operator

Operator adalah simbol yang digunakan untuk melakukan operasi pada suatu nilai dan variabel.
Operator dalam pemrograman terbagi dalam 6 jenis:

```1. Operator aritmatika;
2. Operator Penugasan (Assignment);
3. Opeartor relasi atau perbandingan;
4. Operator Logika;
5. Operator Bitwise;
6. Operator Ternary;
```

## Contoh Operator

1. Operator Aritmatika 
Operator aritmatika merupakan operator untuk melakukan operasi aritmatika seperti penjumlahan, pengurangan, pembagian, perkalian, dsb.

Nama Operator | Simbol
Penjumlahan | +
Pengurangan | -
Perkalian | *
Pemangkatan | **
Pembagian | /
Sisa Bagi | %

Contoh :

```var a = 5;
var b = 3;

// menggunakan operator penjumlahan
var c = a + b;
console.log(c);
```

2. Operator Penggabungan Teks

Pada Javascript, apabila kita akan melakukan operasi terhadap tipe data string atau teks menggunakan penjumlahan (+), maka yang akan terjadi adalah penggabungan; Bukan penjumlahan.
Contoh :

```var a = "10" + "2";
console.log(a);```

Hasilnya akan "102" kenapa? karena kedua angka tersebut merupakan sebuah String bukan Angka, hal ini di karenakan penggunaan tanda petik maka akan dianggap String.

3. Operator Penugasan

Operator penugasan adalah operator yang digunakan untuk memberikan tugas kepada variabel. Biasanya digunakan untuk mengisi variabel.

Contoh : 

``` var a = 19;```

Variabel a kita berikan tugas untuk menyimpan nilai 19.

Nama Operator | Sombol
Pengisian Nilai | =
Pengisian dan Penambahan | +=
Pengisian dan Pengurangan | -=
Pengisian dan Perkalian | *=
Pengisian dan Pemangkatan | **=
Pengisian dan Pembagian | /=
Pengisian dan Sisa bagi | %=
