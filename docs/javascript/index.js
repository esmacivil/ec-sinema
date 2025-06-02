const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const filmler = [
  { id: 1, ad: "Inception", kategori: "Bilim Kurgu" },
  { id: 2, ad: "Titanic", kategori: "Dram" }
];

let rezervasyonlar = [];

app.get('/filmler', (req, res) => {
  res.json(filmler);
});

app.post('/rezervasyon', (req, res) => {
  const { filmId, kullaniciAdi } = req.body;

  if (!filmId || !kullaniciAdi) {
    return res.status(400).json({ hata: "filmId ve kullaniciAdi gereklidir." });
  }

  const rezervasyon = { filmId, kullaniciAdi };
  rezervasyonlar.push(rezervasyon);

  console.log("Rezervasyon alındı:", rezervasyon);
  res.json({ mesaj: "Rezervasyon başarıyla kaydedildi.", rezervasyon });
});

app.listen(port, () => {
  console.log(`Sunucu çalışıyor: http://localhost:${port}`);
});
