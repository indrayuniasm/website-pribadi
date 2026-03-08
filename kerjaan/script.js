// BLOK TOMBOL
document.addEventListener("keydown", function(e) {

    // F12
    if (e.key === "F12") {
        e.preventDefault();
        location.reload();
    }

    // CTRL+U
    if (e.ctrlKey && e.key.toLowerCase() === "u") {
        e.preventDefault();
    }

    // CTRL+S
    if (e.ctrlKey && e.key.toLowerCase() === "s") {
        e.preventDefault();
    }

    // CTRL+SHIFT+I / CTRL+SHIFT+C / CTRL+SHIFT+J
    if (e.ctrlKey && e.shiftKey && ["I","C","J"].includes(e.key)) {
        e.preventDefault();
        location.reload();
    }
});


// BLOK KLIK KANAN
document.addEventListener("contextmenu", function(e){
    e.preventDefault();
});


// DETEKSI DEVTOOLS (reload kalau dibuka)
setInterval(function() {

    const threshold = 160;

    if (
        window.outerWidth - window.innerWidth > threshold ||
        window.outerHeight - window.innerHeight > threshold
    ) {
        location.reload();
    }

}, 1000);

function tutupucapan(){
document.getElementById("ucapansalam").style.display="none";
}

function ucapanWaktu(){

    var jam  = new Date().getHours();
    var teks = "";

    if(jam >= 4 && jam < 11){
        teks = "Selamat Pagi ☀️";
    }
    else if(jam >= 11 && jam < 15){
        teks = "Selamat Siang 🌤️";
    }
    else if(jam >= 15 && jam < 18){
        teks = "Selamat Sore 🌇";
    }
    else{
        teks = "Selamat Malam 🌙";
    }

    document.getElementById("ucapan").innerText = teks;
}

ucapanWaktu();


// tombol untuk menutup popup
function tutupucapan(){
    var popup = document.getElementById("ucapansalam");
    popup.style.display = "none";
}

AOS.init();