function gantiNama() {
    let nama = prompt("Infokan nama kamu", "Pengunjung");
    document.getElementById("nama").innerHTML = nama;
}

let tombol = document.getElementById("tombol").addEventListener("click", function () {
    gantiNama();
});

function validateForm() {
    const nama = document.getElementById("nama-lengkap").value;
    const tanggalLahir = document.getElementById("tgllhr").value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const messages = document.getElementById("pesan").value;

    if (nama === "" || tanggalLahir === "" || !gender || messages === "") {
        alert("Isilah kolom yang kosong!");
        return false;
    } else {
        const currentDate = new Date();
        const formattedDate = currentDate.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
        });

        // Update the view-form section
        document.getElementById("nama-lengkap-pengirim").innerText = nama;
        document.getElementById("tanggal-lahir-pengirim").innerText = tanggalLahir;
        document.getElementById("gender-pengirim").innerText = gender.value;
        document.getElementById("pesan-pengirim").innerText = messages;
        document.getElementById("tanggal-submit").innerText = formattedDate;

        return false;
    }
}
