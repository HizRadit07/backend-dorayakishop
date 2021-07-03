# backend-dorayakishop

Repositori berisi backend server untuk tugas simulasi API toko dorayaki dalam rangka seleksi asisten Lab Programming ITB 2021. Repositori ini dibuat oleh Hizkia Raditya / 13519087. Repositori ini dibuat menggunakan javascript, express, dan menggunakan MongoDB untuk basis data.

# Endpoints
Ada 3 endpoint utama untuk api ini, '/dorayaki' untuk operasi dorayaki, '/toko-dorayaki' untuk operasi toko dorayaki, dan '/stok' untuk operasi stok. Setiap 3 endpoint ini punya endpoint lagi untuk masing-masing operasi yang dapat dilakukan ke database. Detailnya sebagai berikut (bisa juga dilihat source codenya di folder routes)

## /dorayaki
* '/', method GET: mengembalikan seluruh dorayaki di database
* '/add', method POST: menambahkan dorayaki baru ke database
* '/:id', method GET: mengembalikan dorayaki sesuai id
* '/:id', method DELETE: menghapus dorayaki sesuai id
* '/update/:id', method POST: memperbarui(update) dorayaki sesuai id

struktur dorayaki: {rasa : String, deskripsi : String, gambar : String} <br/>
note: gambar == url ke gambar utk dorayaki

## /toko-dorayaki
* '/', method GET: mengembalikan seluruh toko dorayaki di database
* '/add', method POST: menambahkan toko dorayaki baru ke database
* '/:id', method GET: mengembalikan toko dorayaki sesuai id
* '/:id', method DELETE: menghapus toko dorayaki sesuai id
* '/update/:id', method POST: memperbarui(update) toko dorayaki sesuai id

struktur toko dorayaki: {nama : String , jalan : String, kecamatan : String, provinsi : String}
