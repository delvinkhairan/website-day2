document.getElementById("kontakForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const nama = document.getElementById("nama").value.trim();
  const email = document.getElementById("email").value.trim();
  const pesan = document.getElementById("pesan").value.trim();

  if (!nama || !email || !pesan) {
    alert("Semua kolom wajib diisi!");
    return;
  }

  const tbody = document.querySelector("#dataKontak tbody");
  const newRow = tbody.insertRow();
  newRow.innerHTML = `
    <td>${nama}</td>
    <td>${email}</td>
    <td>${pesan}</td>
  `;

  document.getElementById("kontakForm").reset();
});
