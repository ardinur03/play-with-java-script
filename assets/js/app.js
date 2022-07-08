// saya menggunakan array-object
const daftarMenu = [{
        nama: "Cappucino",
        harga: 35000,
    },
    {
        nama: "Green Tea Latte",
        harga: 40000,
    },
    {
        nama: "Fish and Chips",
        harga: 50000,
    },
    {
        nama: "Tuna Sandwich",
        harga: 45000,
    },
    {
        nama: "Mineral Water",
        harga: 8000,
    },
    {
        nama: "French Fries",
        harga: 18000,
    }
];

// deklarasi variabel untuk tag ul
var tagUl = '<ul id="body-list-menu">'
for (const property in daftarMenu) { // looping/perulangan array object tersebut
    // menambahkan tag di dalam variabel tagUl
    tagUl += `<li id="menu-detail" value="${property}"> ${daftarMenu[property].nama} <span class="rata-kanan" id="span-harga" value="${property}">Rp ${daftarMenu[property].harga}</span></li>`;
}
// menambahkan penutup tag ul
tagUl += '</ul>';
// ambil id list menu, kemudian masukan var tagUl nya
document.getElementById("list-menu").innerHTML = tagUl;

// deklarasi variabel total harga untuk awal adalah 0
var total_harga = 0;
// ambil id total-harga, kemudian masukan nilai dari variabel total_harga
document.getElementById("total-harga").innerHTML = total_harga;

// fungsi untuk ambil data
function ambilDataHarga(no_index_param) {
    return daftarMenu[no_index_param]["harga"]; // kembalikan nilai harga daftarmenu berdasarkan no index
}

// fungsi aksi dinamis dengan 2 parameter dan berisikan kondisi untuk menghitung total harga berdasarkan menu yang di pilih (tambah atau kurang)
function transaksi_pembelian(jenis_transaksi_param, ambil_harga_param) {
    if (jenis_transaksi_param == "tambah") {
        total_harga += ambil_harga_param; // isi dan tambahkan nilai
    } else if (jenis_transaksi_param == "kurangi") {
        total_harga -= ambil_harga_param; // isi dan kurangkan nilai
    } else {
        alert('Ops.. terjadi kesalahan !!!'); // jika kondisi di atas salah maka muncul alert ini (meskipun ini tidak berpengaruh tetapi lebih baik di beri kondisi)
    }
    return total_harga; // kembalikan nilai total harga
}

// ambil id body-list-menu
var ambil_id = document.getElementById("body-list-menu");
ambil_id.addEventListener("click", e => { // saya menggunakan arrow function
    if (e.target.matches("#menu-detail")) { // jika element target ber-id 'menu-detail' maka ...
        // ambil no index array dari element yang di pilih
        var no_index = e.target.value;
        // ambil haga menu berdasarkan index yang di pilih
        var ambil_harga = ambilDataHarga(no_index);
        if (e.target.className == "") { //jika element dari target id 'menu-detail' classnya kosong maka ...
            // tambahkan element yang di klik (li) dengan class bg-green
            e.target.className = "bg-green";
            // eksekusi transaksi tambah order jika pengguna memilih pesanan yang belum di pesan
            var total_harga = transaksi_pembelian("tambah", ambil_harga);
            // ambil id total-harga, kemudian masukan variabel isi_harga
            document.getElementById("total-harga").innerHTML = total_harga;
        } else {
            // hapus class bg-green
            e.target.classList.remove("bg-green");
            // eksekusi transaksi di kurangi jika pengguna menghapus pesanan 
            var total_harga = transaksi_pembelian("kurangi", ambil_harga);
            // ambil id total-harga, kemudian masukan variabel isi_harga
            document.getElementById("total-harga").innerHTML = total_harga;
        }
    }
});