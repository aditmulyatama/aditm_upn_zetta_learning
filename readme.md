Welcome to my repository :)
This is angular day 4

# Report

1. Di angular, setiap komponen disalurkan melalui 8 fase berbeda dalam siklus hidupnya. Tepatnya, ini pertama kali diinisialisasi, dan kemudian root dibuat dan kemudian disajikan ke komponen-komponennya. Itu selalu diperiksa setiap kali komponen dimuat selama pengembangan aplikasi dan diperbarui secara bertahap. Ketika komponen tetap tidak digunakan, fase kematian didekati dengan menghancurkan dan mengeluarkannya dari DOM.
   Sangat menarik untuk dicatat bahwa Angular dapat mengawasi semua siklus hidup komponen dan arahannya dan dapat dengan cerdas memahami hasilnya dengan data sebelumnya, membuat integrasi aplikasi menjadi lancar. Secara kolektif, komponen membuat blok bangunan utama dari versi, dan Direktif menyalurkan versi ini dengan build.
   Hal lain yang menarik tentang siklus hidup Angular adalah bahwa setiap komponen memiliki siklus hidupnya, dan pada setiap tahap, siklus hidup bergerak dari inisialisasi ke kehancuran. Setiap komponen melewati 8 tahap. Langkah-langkahnya dapat dijelaskan dalam poin-poin berikut.

- Saat menginisialisasi komponen siklus hidup Angular apa pun, ia membuat dan disajikan ke komponen akarnya yang dirancang untuk diproduksi kepada ahli waris.
- Fase berikutnya melibatkan komponen yang dimuat selama pengembangan aplikasi, dan teknik pengikatan data diubah dan diperbarui secara bertahap.
- Bagian selanjutnya melibatkan komponen yang tidak digunakan yang tidak digunakan dan didekati ke fase kematian dan dipindahkan dari DOM.

# KUIS

1. ada dua kasus:
   a. Initialisasi directive atau komponen setelah angular pertamakali menampilkan properti data
   b. Mengatur directive atau properti input komponen
2. dipanggil saat:
   a. dipanggil setelah ngOnChanges (jika terdapat onChanges)
   b. dipanggil walaupun tidak ada onChanges
3. ngAfterViewInit dipanggil pada saat setelah ngAfterContentChecked
4. ngOnChanges dipanggil pada saat sebelum ngOnInit (jika terdapat perubahan pada input)
5. Urutan hooks lifecycle :
   1. ngOnChanges
   2. ngOnInit
   3. ngDoCheck
   4. ngAFterContentInit
   5. ngAfterContentChecked
   6. ngAfterViewInit
   7. ngAfterViewChecked
