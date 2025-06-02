function aktiflestirYildizlar(containerId) {
    const container = document.getElementById(containerId);
    const yildizlar = container.querySelectorAll('span');
    let seciliYildiz = 0;

    yildizlar.forEach((yildiz, index) => {
        yildiz.addEventListener('mouseover', () => {
            yildizlar.forEach((y, i) => {
                y.classList.toggle('hover', i <= index);
            });
        });

        yildiz.addEventListener('mouseout', () => {
            yildizlar.forEach((y, i) => {
                y.classList.remove('hover');
                if(i < seciliYildiz) {
                    y.classList.add('active');
                } else {
                    y.classList.remove('active');
                }
            });
        });

        yildiz.addEventListener('click', () => {
            seciliYildiz = index + 1;
            yildizlar.forEach((y, i) => {
                y.classList.toggle('active', i < seciliYildiz);
            });
            container.setAttribute("data-puan", seciliYildiz);
        });
    });
}

// Sayfa yüklendiğinde yıldızları etkinleştir
window.addEventListener('DOMContentLoaded', () => {
    aktiflestirYildizlar("markaYildiz");
    aktiflestirYildizlar("siteYildiz");
});

// Gönder butonu fonksiyonu
function gonderPuan() {
    const film = document.getElementById("filmSec").value;
    const puan = document.getElementById("puan").value;
    const yorum = document.getElementById("yorum").value;

    const markaPuan = parseInt(document.getElementById("markaYildiz").getAttribute("data-puan")) || 0;
    const sitePuan = parseInt(document.getElementById("siteYildiz").getAttribute("data-puan")) || 0;

    console.log("Film:", film);
    console.log("Puan:", puan);
    console.log("Yorum:", yorum);
    console.log("Marka Puanı:", markaPuan);
    console.log("Site Puanı:", sitePuan);

    // Formu sıfırla
    document.getElementById("degerlendirmeFormu").reset();
    document.getElementById("markaYildiz").removeAttribute("data-puan");
    document.getElementById("siteYildiz").removeAttribute("data-puan");

    const yildizlar = document.querySelectorAll(".yildizlar span");
    yildizlar.forEach(y => y.classList.remove("active"));
}
