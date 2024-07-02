function gantiNama() {
    let nama = prompt("Infokan nama kamu", "acumalaka");
    document.getElementById("nama").innerHTML = nama;
}
let tombol = document.getElementById("tombol").addEventListener("click", function () { 
    gantiNama() 
});