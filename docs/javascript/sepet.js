document.addEventListener("DOMContentLoaded", function () {
  const sepet = JSON.parse(localStorage.getItem("sepet")) || [];
  const tablo = document.querySelector(".sepet-tablosu");
  const toplamAlani = document.querySelector(".toplam-alani");

  // Tabloda <tbody> yoksa ekle
  let tbody = tablo.querySelector("tbody");
  if (!tbody) {
    tbody = document.createElement("tbody");
    tablo.appendChild(tbody);
  }

  if (sepet.length === 0) {
    tbody.innerHTML = "<tr><td colspan='4'>Sepetiniz boş.</td></tr>";
    toplamAlani.textContent = "";
    return;
  }

  sepet.forEach((film, index) => {
    const satir = document.createElement("tr");

    const adHucre = document.createElement("td");
    adHucre.textContent = film.ad;

    const adetHucre = document.createElement("td");
    adetHucre.textContent = 1;

    const islemHucre = document.createElement("td");
    const silButon = document.createElement("button");
    silButon.textContent = "Sil";

    // Stil
    silButon.style.backgroundColor = "red";
    silButon.style.color = "white";
    silButon.style.border = "none";
    silButon.style.padding = "6px 12px";
    silButon.style.borderRadius = "4px";
    silButon.style.cursor = "pointer";

    silButon.addEventListener("click", () => {
      sepet.splice(index, 1);
      localStorage.setItem("sepet", JSON.stringify(sepet));
      location.reload();
    });

    islemHucre.appendChild(silButon);

    satir.appendChild(adHucre);
    satir.appendChild(adetHucre);
    satir.appendChild(islemHucre);

    tbody.appendChild(satir);
  });

  toplamAlani.textContent = ""; // Toplam gösterimi de iptal
});
// Satın Al butonuna tıklanınca sepetteki ilk filmi localStorage'a yaz
const satinAlButonu = document.querySelector(".satin-al-buton");

if (satinAlButonu) {
  satinAlButonu.addEventListener("click", function () {
    const sepet = JSON.parse(localStorage.getItem("sepet")) || [];

    if (sepet.length > 0) {
      localStorage.setItem("secilenFilm", sepet[0].ad);
    }
  });
}
