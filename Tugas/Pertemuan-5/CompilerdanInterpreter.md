# OMPILER dan INTERPRETER


### Compiler
Compiler (kompilator) adalah sebuah program komputer yang berguna untuk menerjemahkan program komputer yang ditulis dalam bahasa pemrograman tertentu menjadi program yang ditulis dalam bahasa pemrograman lain.

Terlepas dari pengertiannya yang luas, istilah compiler biasa digunakan untuk program komputer yang menerjemahkan program yang ditulis dalam bahasa pemrograman tingkat tinggi (semacam bahasa Pascal, C++, BASIC, FORTRAN, Visual Basic, Visual C#, Java, xBase, atau COBOL) menjadi bahasa mesin, biasanya dengan bahasa Assembly sebagai perantara.

Arsitektur compiler modern biasanya bukan lagi merupakan program tunggal namun merupakan rangkaian komunikasi antar program dengan tugas spesifik masing-masing. Program-program tersebut beserta tugasnya secara umum terdiri dari:

... Compiler itu sendiri, yang menerima kode sumber dan menghasilkan bahasa tingkat rendah (assembly)
... Assembler, yang menerima keluaran compiler dan menghasilkan berkas objek dalam bahasa mesin
... Linker, yang menerima berkas objek keluaran assembler untuk kemudian digabungkan dengan pustaka-pustaka yang diperlukan dan menghasilkan program yang dapat dieksekusi (executable)

Compiler yang menggunakan arsitektur ini misalnya GCC, Clang dan FreeBASIC.

Beberapa compiler tidak menggunakan arsitektur di atas secara gamblang, dikarenakan komunikasi antar program jauh lebih lambat dibandingkan jika komunikasi dilakukan secara internal di dalam satu program. Sehingga compiler-compiler tersebut mengintegrasikan assembler dan linker di dalam compiler. Namun, biasanya arsitektur yang digunakan pun tidak kaku dan mengizinkan penggunaan assembler maupun linker eksternal (berguna jika assembler dan linker internal bermasalah). Compiler yang menggunakan arsitektur ini salah satunya adalah Free Pascal.

### Interpreter

Dalam ilmu komputer, penerjemah atau lebih dikenal dengan interpreter merupakan perangkat lunak yang berfungsi melakukan eksekusi sejumlah instruksi yang ditulis dalam suatu bahasa pemrograman tanpa terlebih dahulu menyusunnya menjadi program bahasa mesin. Interpreter umumnya menggunakan salah satu strategi berikut untuk menjalankan program:

... Mengeksekusi kode sumber secara langsung, atau
... Menerjemahkannya ke dalam serangkaian p-code kemudian mengeksekusinya, atau
... Mengeksekusi kode yang telah dikompilasi sebelumnya oleh compiler yang merupakan bagian dari sistem penerjemahan.

Proses ini sangat berbeda dengan compiler, dimana pada compiler, hasilnya sudah langsung berupa satu kesatuan perintah dalam bentuk bahasa mesin, dimana proses penterjemahan dilaksanakan sebelum program tersebut dieksekusi.

Perl, Python, Ruby, dan MATLAB adalah beberapa contoh perangkat lunak penerjemah bertipe 2, sementara Java termasuk dalam kategori tipe 3, namun dalam beberapa kasus Java dapat digolongkan pula ke dalam kategori tipe 2.


### Perbedaan Compiler dan Interpreter

[logo]: https://miro.medium.com/max/850/1*9prupuV0tCou5ye3kT528w.jpeg "Beda Compiler dan Interpreter"
