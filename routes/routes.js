// import express
import express from "express";
 
// init express router
const router = express.Router();

router.get('/biodata/:nama/:Tempat_lahir/:Tanggal_lahir/:Jenis_kelamin/:agama/:alamat/:Telepon/:Email/:Hobi/:Cita_cita', (req, res) => {
    var nama = req.params.nama;
    var Tempat = req.params.Tempat_lahir;
    var tanggal =req.params.Tanggal_lahir;
    var kelamin=  req.params.Jenis_kelamin;
    var Agama =  req.params.agama;
    var Alamat = req.params.alamat;
    var Telepon = req.params.Telepon;
    var Email = req.params.Email;
    var Hobi = req.params.Hobi;
    var Cita_cita = req.params.Cita_cita;

    res.send(
    'Nama : ' + nama + '<br>' + 
    'Tempat Lahir : ' + Tempat +'<br>' +
    'Tanggal Lahir : ' + tanggal +'<br>' + 
    'Jenis Kelamin : ' + kelamin  +'<br>' + 
    'Agama : ' + Agama +'<br>' + 
    'Alamat :' + Alamat  + ' <br>' +
    'Telepon : ' + Telepon + '<br> ' + 
    'Email : ' + Email  + ' <br>' + 
    'Hobi :  '+ Hobi + '<br> ' + 
    'Cita-cita :' + Cita_cita + ' <br> ');
});

router.get('/aritmatika', (req, res) => {
    var bilangan1 = 10;
    var bilangan2 = 5;
    var tambah = bilangan1 + bilangan2;
    var bilangan3 = 10;
    var bilangan4 = 5;
    var kurang = bilangan3 - bilangan4;
    var bilangan5 = 20;
    var bilangan6 = 5;
    var bagi = bilangan5 / bilangan6;
    var bilangan7 = 5;
    var bilangan8 = 6;
    var kali = bilangan7 * bilangan8;
    res.send(
        '<h3>Penjumlahan</h3>' + 
        'Bilangan ke 1 : ' + bilangan1 + '<br>' +
        'Bilangan ke 2 : ' + bilangan2 + '<br>' + 
        'Hasil : ' + tambah + '<hr>' +

        '<h3>Pengurangan</h3>' + 
        'Bilangan ke 3 : ' + bilangan3 + '<br>' +
        'Bilangan ke 4 : ' + bilangan4 + '<br>' + 
        'Hasil : ' + kurang + '<hr>' + 

        '<h3>Pembagian</h3>' + 
        'Bilangan ke 5 : ' + bilangan5 + '<br>' +
        'Bilangan ke 6 : ' + bilangan6 + '<br>' + 
        'Hasil : ' + bagi+ '<hr>' +

        '<h3>Perkalian</h3>' + 
        'Bilangan ke 7 : ' + bilangan7 + '<br>' +
        'Bilangan ke 8 : ' + bilangan8 + '<br>' + 
        'Hasil : ' + kali+ '<hr>' 
    );
        
});

router.get('/bangun_datar', (req, res) => {
    var sisi1 = 5;
    var sisi2 = 5;
    var persegi = sisi1 * sisi2;
    var panjang = 4;
    var lebar = 8;
    var persegi_panjang = panjang * lebar
    var alas = 4;
    var tinggi = 6;
    var segitiga =alas * tinggi / 2;
    var v= 3;
    var jari = 3.14
    var lingkaran = v * jari * jari;
    res.send(
        '<h3>Persegi</h3>' + 
        'sisi ke 1 : '+ sisi1 +'<br>' +
        'sisi ke 2 : '+ sisi2 +'<br>' +
        'Hasil : '+ persegi +'<hr>' +

        '<h3>Persegi panjang</h3>' +
        'panjang ke 3 : '+ panjang + '<br>' +
        'panjang ke 4 : '+ lebar + '<br>' +
        'Hasil : '+ persegi_panjang + '<hr>' +

        '<h3>Segitiga</h3>' +
        'alas ke 5  : '+ alas + '<br>' +
        'tinggi ke 6 : '+ tinggi + '<br>' +
        'Hasil : '+ segitiga + '<hr>' +

        '<h3>Lingkaran</h3>' +
        'v : '+ v + '<br>' +
        'jari : '+ jari  + '<br>' +
        'Hasil : '+ lingkaran + '<hr> '
    );
});

router.get('/tes/:nama/:kelas/:pts/:pas', (req, res) => {
    var nama = req.params.nama;
    var kelas = req.params.kelas;
    var pts =parseInt(req.params.pts);
    var pas =parseInt(req.params.pas);

    var rapot = (pts + pas) / 2;

    if (rapot >= 90 && rapot <= 100) {
        var grade = 'Grade A';
    } else if (rapot >= 80) {
        var grade = "Grade B"
    } else if (rapot >= 70) {
        var grade = "Grade C"
    } else if (rapot >= 60) {
        var grade = "Grade D"
    } else if (rapot >= 50) {
        var grade = "Grade E"
    } else if (rapot >= 0){
        var grade = "Sing getol diajar !!";
    } else {
        var grade = "Nilai tidak valid";
    }
    res.send(
        'nama : ' + nama + '<br>' +
        'kelas : ' + kelas + '<br>' +
        'nilai pts : ' + pts + '<br>' +
        'nilai pas : ' + pas + '<br>' +
        'nilai rapot : ' + rapot + '<br>' +
        'Keterangan : ' + grade 
    );
});

router.get('/bersarang/:nama/:jurusan/:kelas', (req, res) => {

    var nama = req.params.nama;
    var jurusan = req.params.jurusan;
    var kelas = req.params.kelas;

    if(jurusan == 'RPL') {
        if (kelas == '10 RPL') {
        var ket ="Anda kelas 10 RPL";
        } else if (kelas == '11 RPL') {
            var ket ="Anda kelas 11 RPL";
        }  else if (kelas == '12 RPL'){
             var ket ="Anda kelas 12 RPL";
        } else {
            var ket = "Anda Alumni";
        }

    } else if(jurusan == 'TKRO') {
        if (kelas == '10 TKRO') {
        var ket ="Anda kelas 10 TKRO";
         } else if (kelas == '11 TKRO') {
        var ket ="Anda kelas 11 TKRO";
         } else if (kelas == '12 TKRO'){
        var ket ="Anda kelas 12 TKRO";
         } else {
        var ket = "Anda Alumni";
         }

    } else if(jurusan == 'TBSM') {
        if (kelas == '10 TBSM') {
            var ket ="Anda kelas 10 RPL";
        } else if (kelas == '11 TBSM') {
            var ket ="Anda kelas 11 TBSM";
        } else if (kelas == '12 TBSM') {
            var ket ="Anda kelas 12 TBSM";
        } else {
            var ket ="Anda Alumni";
        }
    } else {
        var ket = "Jurusan tidak tersedia";
    }   
    res.send(
        'Nama : ' + nama + '<br>' +
        'Kelas : ' + ket
    );
});

router.get('/latihan/:Nama_pembeli/:Tanggal/:Jenis/:Pesanan/:Jumlah', (req, res) => {
        var nama = req.params.Nama_pembeli
        var tanggal= req.params.Tanggal
        var jenis = req.params.Jenis
        var pesanan = req.params.Pesanan
        var jumlah = req.params.Jumlah

        if (jenis == 'makanan') {
            if (pesanan ==  'Nasi goreng') {
                var harga ="20000";
            } else if (pesanan == 'Mie goreng') {
                var harga ="30000";
            } else if (pesanan == 'Ayam goreng') {
                var harga ="40000";
            }
        } else if (jenis == 'minuman') {
            if (pesanan == 'Air mineral') {
                var harga ="10000"
            } else if (pesanan == 'Jus') {
                var harga ="20000";
            } else if (pesanan == 'Kopi') {
                var harga ="30000";
            }
        } else {
            var pesanan ="Pesanan tidak tersedia";
        }

        var Total = jumlah * harga ;
        if (Total >= 100000) {
            var diskon = Total * 0.5;
        } else {
              var diskon = 0
        }
        var Total_pembayaran = Total - diskon ;


        res.send (
            '<h3>Starbuck Lokal</h3>' +
            'nama pembeli : ' + nama + '<br>' +
            'Tanggal : ' + tanggal + '<br>' +
            'Jenis : ' + jenis + '<br>' +
            'Pesanan : ' + pesanan + '<br>' +
            'harga : ' + harga + '<br>' +
            '------------------------------'+ '<br>' +
            'Jumlah : ' + jumlah + '<br>' +
            'Total : ' + Total + '<br>' +
            'Diskon : ' + diskon + '<br>' +
            'Total_pembayaran :' + Total_pembayaran
        );
}) ;

router.get('/sample', (req, res) => {
    res.send(
        '<h3>Selamat datang</h3>'
    );
})

// export default router
export default router;