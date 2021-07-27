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

## /stok
* '/', method GET: mengembalikan seluruh stok di database
* '/add', method POST: menambahkan stok baru ke database
* '/:id', method GET: mengembalikan stok sesuai id
* '/:id', method DELETE: menghapus stok sesuai id
* '/update/:id', method POST: memperbarui(update) stok sesuai id
* '/findname/:nama', method GET: mengembalikan stok sesuai atribut nama

struktur stok : {nama: String, rasa: String, jumlah: Number} <br/>
note: nama == nama toko yang menjual, rasa == rasa dorayaki yang dijual

# Cara Menjalankan
API dapat dijalankan menggunakan docker atau dengan install manual npm package yang diperlukan

## Alternatif 1 Docker
1. Pastikan docker sudah terinstall dan dapat dijalankan di mesin anda
2. Clone repositori ini dan masuk ke repositori
3. jalankan command berikut:
        
        docker-compose up --build
        
4. Jika benar, akan menunjukkan seperti ini:

        api-server_1  | Server is running on port: 5000
        api-server_1  | (node:26) [MONGODB DRIVER] Warning: Current Server Discovery and Monitoring engine is deprecated, and will be      removed in a future version. To use the new Server Discover and Monitoring engine, pass option { useUnifiedTopology: true } to the MongoClient constructor.
        api-server_1  | (Use `node --trace-warnings ...` to show where the warning was created)
        api-server_1  | MongoDB database connection established successfully
       
5. API dapat dijalankan dan dicoba menggunakan postman/software sejenis

## Alternatif 2 Manual npm install
1. Pastikan node.js dan npm sudah diinstall dan dapat dijalankan di mesin anda.
2. Clone repositori ini dan masuk ke repositori
3. Jalankan command berikut:

       npm install
       
4. Tunggu sampai seluruh package sudah diinstall, lalu jalankan command berikut

        npm start

5. Jika benar, shell akan menunjukkan sebagai berikut:

        Server is running on port: 5000
        (node:14832) [MONGODB DRIVER] Warning: Current Server Discovery and Monitoring engine is deprecated, and will be removed in a future version. To use the new Server Discover and Monitoring engine, pass option { useUnifiedTopology: true } to the MongoClient constructor.
        (Use `node --trace-warnings ...` to show where the warning was created)
        MongoDB database connection established successfully
             
6. API dapat dijalankan dan dicoba menggunakan postman/software sejenis

## Bonus Component
API di deploy di heroku, dapat diakses lewat link berikut: https://backend-dorayakishop.herokuapp.com/
note: dengan endpoint yang sama seperti di readme ini
