// callBack Synchrounous

function tumbas (tumbas) {
    alert (`Meh Tumbas Nopo Le?  ${tumbas}`);
}


function tampilkanpesan (callback) {
    const tumbas = prompt ("Masukkan pesanan anda");
    callback (tumbas);
}

tampilkanpesan(tumbas);

// callBack Asynchrounous

function makanan(satu, dua, callback) {
setTimeout(()=>{
        console.log(satu, dua);
    }, 3000)
    callback()
}

function callback() {
    console.log('gorengan');
}
makanan('Mie Ayam', 'Ayam Bakar', callback)

// callBack Asynchrounous
