alert(`hai sebelum nya terimakasih atas undangan nya untuk saya dapat ke acara spesial kamu, ada barang dan ucapan virtual yang sederhana untuk kamu `)

let nama = prompt("sebelum nya masukan nama anda terlebih dahulu");
let umur = prompt("berapa umur anda sekarang ?");
alert(`hai ${nama} selamat ulang tahun yang ke-${umur} 🥳`)
alert(`ada sebuah lilin virtual kamu bisa meniiup nya dengan cara mengklik apinya 😄 ada musik tapi stel manual y 🗿 `)
$(document).ready(function() {
    $(function () {
    var flame = $("#flame");
    var txt = $("h1");

    flame.on({
        click: function () {
        flame.removeClass("burn").addClass("puff");
        $(".smoke").each(function () {
            $(this).addClass("puff-bubble");
        });
        $("#glow").remove();
        txt.hide().html(" happy birthday 🎂").delay(750).fadeIn(300);
        $("#candle").animate(
            {
            opacity: ".5"
            },
            100
        );
        }
    });
});});

const namaSaya = document.createElement ('p')
namaSaya.innerHTML = 'congratulations'
body.append (namaSaya)