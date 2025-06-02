console.log("Script çalışıyor");

const filmler = [ 
    { 
      ad: "Bir Minecraft Filmi", 
      resim: "../gorseller/minecraft.jpg", 
      aciklama: "1 sa 41 dk / Aile" ,
      genelbakis: "Bir Minecraft Filmi, gizemli bir geçitten geçerek bilmedikleri bir dünyaya adım atan bir grup uyumsuzun hikayesini konu ediyor. Bambaşka karaktere sahip olan Garrett Garrison, Henry, Natalie ve Dawn, gizemli bir kapıdan tuhaf bir dünyaya çekildiklerinde günlük hayatlarından koparlar.",
      video: "https://youtu.be/Z8smAvhryTQ?si=sTgpOdlBflwkWMcH" ,
    },
    { 
      ad: "Şafağa Kadar", 
      resim: "../gorseller/şafağakadar.jpg", 
      aciklama: "1 sa 43 dk / Korku " ,
      genelbakis: "Clover'ın (Ella Rubin) kız kardeşi Melanie'nin gizemli bir şekilde ortadan kaybolmasının üzerinden bir yıl geçmiştir. Clover ve arkadaşları cevaplar bulmak için kız kardeşinin ortadan kaybolduğu ücra vadiye doğru yola koyulurlar. Terk edilmiş ziyaretçi merkezinde maskeli bir katil tarafından takip edilip dehşet dolu anlar yaşayacaklardır. Ta ki uyanıp aynı akşamın başlangıcına dönene kadar.",
      video: "https://youtu.be/8Wr4oNobXVU?si=BN1xZtH3cLCdKOHG" ,
    },
    {
      ad: "Star Wars: Bölüm 3- Sith'in İntikamı",
      resim: "../gorseller/starwars.jpg",
      aciklama: "2 sa 20 dk/ Bilim Kurgu" ,
      genelbakis: "Kahraman ve bilge Jedi'ler fazlasıyla uzayan savaştan dolayı oldukça yorgundur. Asıl sorun ise savaşı bahane göstererek demokrasiyi gözardı eden şansölyenin gizli planlarıdır. Artık klon savaşlarındaki son dönemeçtir ve acımasız komutan Grievious başkentte tozu dumana katmaktadır.",
      video: "https://youtu.be/dkLDWRpe6NA?si=McxD2J7dwIyrMYdT" ,
    },
    {
        ad: "Yıldızlararası",
        resim: "../gorseller/yıldızlarası.jpg",
        aciklama: "2 sa 49 dk/ Bilim Kurgu" ,
        genelbakis: "Yıldızlararası'nda, teknik bilgisi ve becerisi yüksek olan Cooper, geniş mısır tarlalarında çiftçilik yaparak geçinmektedir; amacı iki çocuğuna güvenli bir hayat sunmaktır. Onlarla yaşayan Büyükbaba Donald çocuklara göz kulak olurken, henüz 10 yaşındaki kızı Murph şaşırtıcı bir zekaya sahiptir. Geçmişte bıraktığı biliminsanı kariyerini özleyen Cooper'un karşısına bir gün beklenmedik bir teklif çıkar ve ailesinin, dahası insanlığın güvenliği için zorlu bir karar alması gerekir...",
        video: "https://youtu.be/A1I50t-SVNQ?si=zWGOcoyMXFrc3-q7" ,
      },
      {
        ad: "Ayakçı",
        resim: "../gorseller/ayakçı.jpg",
        aciklama: "1 sa 35 dk/ Komedi" ,
        genelbakis: "Kargoculuk yapan iki çocuk babası Hayri’nin en büyük hayali, bir milyoncu açmaktır. Hayri, kargo dağıtırken kaza geçirip hastaneye düşer. Orada karşılaştığı bir adam, Hayri’yi başkasıyla karıştırır ve ona para karşılığı Bursa’ya götürmek üzere yasadışı bir paket verir. İçinde bulunduğu bu yanlış anlaşılmayı fırsata çevirmek isteyen Hayri, paketi alır. Yolda karşılaştığı Serkan ve paketi almak için peşlerine takılan ayakçılarla, eğlence ve macera dolu bir yolculuğa çıkar.   ",
        video: "https://youtu.be/2Qk5yLSAMzM?si=LRwzToOOtJUwzl0Q" ,
      },
      {
        ad: "Akıllı Tavşan Momo: Büyük Takip",
        resim: "../gorseller/momo.jpg",
        aciklama: "1 sa 30 dk/ Animasyon" ,
        genelbakis: "Şarkılı Orman’ın sakin hayatı, Timtim'in başının derde girmesiyle bozulur. Ormana giren iki kötü insan, sevimli keman virtüözü Yumi'yi kaçırır ve onu satmaya çalışır. Momo, arkadaşlarını kurtarmak için büyük bir maceraya atılır.",
        video: "https://youtu.be/TxLmw51sOOc?si=LQbzXPaJR1uuScTv" ,
      },
      {
        ad: "Kayıp Dünya",
        resim: "../gorseller/kayıpdünya.jpg",
        aciklama: "1 sa 41 dk/ Aksiyon",
        genelbakis: "Bir araştırma ekibi Jurassic Park'ın B adasına gönderilir. Başlarda her şey yolunda gibidir; ancak gönderilen ekip aslında bütün dinozorların yok edilemediğini ortaya çıkarır. Bu kez insanlar karşılarında daha vahşi, daha ölümcül ve kana karşı daha fazla arzu duyan dinozorları bulacaklardır.",
        video: "https://youtu.be/vn1x9IOnGWQ?si=qI76MJUyvKeUvjtN" ,
      },
      {
        ad: "Ucuz Roman",
        resim: "../gorseller/ucuzroman.jpg",
        aciklama: "2 sa 20 dk/ Suç",
        genelbakis: "Honey Bunny ve Pumpkin, hayatlarına biraz hareket katmak isteyen genç ve birbirlerine aşık bir çift soyguncudur. Bu arada iki işi iyi bilen gangster, Vincent Vega ve Jules, günlük işlerinden biri olarak,patronlarına ödemeyi geciktiren bir kaç sahtekar genci vurmaya giderler.",
        video: "https://youtu.be/MNy5tzNXJTA?si=SAeVspObTnW5oq_R" ,
      },
      {
        ad: "Öldürdüğün Şeyler",
        resim: "../gorseller/öldürdüğünşeyler.jpg",
        aciklama: "1 sa 53 dk/ Dram",
        genelbakis: "Öldürdüğün Şeyler, hasta annesinin gizemli ölümünün peşine düşen bir adamın hikayesini konu ediyor. Hasta annesinin şüpheli ölümünün peşini bırakmayan Ali, esrarengiz bahçıvanını babasına karşı soğukkanlı bir intikam eylemi gerçekleştirmeye ikna eder.",
        video: "https://youtu.be/zrKXJqld914?si=_lQBqbQAToZkzRJ3" ,
      },
      {
        ad: "Asil Prenses",
        resim: "../gorseller/asilprenses.jpg",
        aciklama: "1 sa 24 dk/ Animasyon",
        genelbakis: "Asil Prenses, genç bir kralın, prenses Carolina'nın sevgisini kazanmak için bahçıvan kılığıyla kaleye girmesi sonrası yaşananları konu ediniyor. Genç ve yakışıklı Kral Benjamin bahçıvan kılığına girerek kaleye sızar ve prensesin güvenini kazanmaya çalışır. Zamanla Carolina, onun içtenliğine ve iyiliğine hayran kalır.",
        video: "https://youtu.be/X-iBdRCjZ6o?si=XiCyFF4LSjm_M3OC" ,
      }, 
      {
        ad: "Amatör",
        resim: "../gorseller/amatör.jpg",
        aciklama: "2 sa 3 dk/ Aksiyon",
        genelbakis: "Karısını öldüren bir grup teröristin peşine düşmeye karar veren bir CIA kriptografı (Rami Malek), kendisini eğitmesi konusunda teşkilatına şantaj yapar.",
        video: "https://youtu.be/xe2sVnIwM8Q?si=a-wpyd_AL7APAiWy" ,
      }, 
      {
        ad: "Pink Floyd: Live at Pompeii",
        resim: "../gorseller/pinkfloyd.jpg",
        aciklama: "1 sa 25 dk/ Müzik",
        genelbakis: "Pink Floyd: Live at Pompeii, 1972 yılında Pink Floyd'un Pompeii'deki antik Roma Amfi Tiyatrosu'nda verdiği konseri gözler önüne seriyor. Film yalnızca “Echoes” ve “One of These Days” gibi unutulmaz canlı performansları yakalamakla kalmıyor, aynı zamanda büyüleyici kamera arkası bilgileri de sunuyor",
        video: "https://youtu.be/OpFK9JCT8PU?si=Ejkkaa1EoZ8kygBT" ,
      },
      {
        ad: "Tenet",
        resim: "../gorseller/tenet.jpg",
        aciklama: "2 sa 30 dk/ Aksiyon",
        genelbakis: "Gerçek zamanın ötesinde bir yerde uluslararası bir casusluk görevini yerine getirmeye çalışan kahraman, dünyayı kurtarabilmek için savaşmak zorunda kalır. Üçüncü Dünya Savaşı'ndan daha büyük bir tehlikeyi durdurmaya çalışan kahraman, casusun alacakaranlık dünyasında zorlu bir yolculuğa çıkar.",
        video: "https://youtu.be/AZGcmvrTX9M?si=C4EUAEfTn9NCrxU5" ,
      },
      {
        ad: "Başlangıç",
        resim: "../gorseller/başlangıç.jpg",
        aciklama: "2 sa 20 dk/ Aksiyon",
        genelbakis: "İnsanların beyinlerine uyku halindeyken sızan bir hırsızın tüm planları, geçmişi peşini bırakmayınca verilen yeni görevini ve iş arkadaşlarını tehlikeye atmasına neden olur.",
        video: "https://youtu.be/E-wMep9G32A?si=LxIPthackTKhEYaC" ,
      },
      {
        ad: "İçimdeki Mutluluk",
        resim: "../gorseller/içimdekimutluluk.jpg",
        aciklama: "1 sa 43 dk/ Komedi",
        genelbakis: "İçimdeki Mutluluk, doktordan aldıkları kötü bir haberle hayatları bambaşka bir hal alan bir çiftin hikayesini konu ediyor. Ahmed, garip bir evlilik danışmanıdır. Onun hayatı, eşi Eman'ın doktorundan kötü bir haber almalarıyla bambaşka bir hal alır.1",
        video: "https://youtu.be/l0ExIf9CXuE?si=-5G2y4J19L1-dpe6" ,
      },
      {
        ad: "Baldız",
        resim: "../gorseller/baldız.jpg",
        aciklama: "1 sa 37 dk/ Komedi",
        genelbakis: "Film, bir yanda sevimli olduğu kadar kıskanç da olan bir abla, diğer yanda ise aşkı uğruna her şeyi yapmaya hazır olan bir kız kardeş ve ikisinin ortasında kalan çaresiz bir damadın arasında geçen olayları konu ediniyor.",
        video: "https://youtu.be/03qv5UfwBA0?si=3WgZPuS8ALseNC4A" ,
      },
      {
        ad: "Sitare Cin Kraliçesi",
        resim: "../gorseller/cinkralice.jpg",
        aciklama: "1 sa 7 dk/ Korku",
        genelbakis: "Şeytani bir geçmişin izini süren Rıdvan'ın karanlık intikam yolculuğunu konu alıyor. Yıllar önce babası şeytana kurban edilen Rıdvan, bu trajik olayın izlerini hâlâ taşımaktadır. İçinde büyüyen öfke ve acıyla hareket eden genç adam, babasının intikamını almak için tehlikeli bir plan yapar.",
        video: "https://youtu.be/XSJ3AkzxuIw?si=-F72wOpEB9c6-PAT" ,
      },
      {
        ad: "The End",
        resim: "../gorseller/theend.webp",
        aciklama: "2 sa 28 dk/ Bilim Kurgu",
        genelbakis: "Eski bir tuz madenini lüks bir sığınağa dönüştüren aile ve Dış dünyayı hiç tecrübe etmemiş oğulları, yıllardır etraflarındaki harabe dünyadan izole yaşarlar. Bir anda sığınakta yabancı bir kızın belirmesiyle ailenin tüm dengesi alt üst olur.",
        video: "https://youtu.be/Ht9QhaTEoCw?si=oFiEJ8zHsfjRagte" ,
      },
      {
        ad: "Sayko Terapi",
        resim: "../gorseller/saykoterapi.jpg",
        aciklama: "1 sa 42 dk/ Dram",
        genelbakis: "Sayko Terapi: Bir Seri Katil Hakkında Yazmaya Karar Veren Yazarın Sığ Hikayesi, 24 Nisan'dan itibaren Atlas 1948 Sineması'nda! Boşanma sürecinde yazarlık kariyeri de çıkmaza giren bir adam, emekli bir seri katille beklenmedik bir dostluk kurar. Bu tuhaf ilişki, adamın hayatını ve yazarlığını tamamen değiştirir.",
        video: "https://youtu.be/6PORNqAJWKc?si=KwkAwyGp0DgOL0Ar" ,
      },
      {
        ad: "Zifin",
        resim: "../gorseller/zifin.jpg",
        aciklama: "1 sa 37 dk/ Romantik",
        genelbakis: "Tepenin Uşakları 2: Zifin, sevdiği kadın Zeynep'e kavuşmak için zorlu bir mücadele vermek zorunda kalan Akçaabat'ta kimsesiz bir şekilde büyüyen Kadir'in hikayesini konu ediyor.",
        video: "https://youtu.be/Xio1P4z7PnI?si=nAZmXtYK06O0ZoBo" ,
      },
      {
        ad: "Sürmeli",
        resim: "../gorseller/sürmeli.jpg",
        aciklama: "1 sa 30 dk/ Aksiyon",
        genelbakis: "Film, genç bir adamın cezaevine düşmesiyle başlayan ve dış dünyada arkasından çevrilen entrikaları konu alıyor. Parmaklıklar ardında hayatta kalmaya çalışan bu genç, dışarıda kendisine kurulan tuzaklardan habersizdir.",
        video: "https://youtu.be/g0W_G6kVYlA?si=xEq8J-c0b-ia2A8x" ,
      },
      {
        ad: "Günahkarlar",
        resim: "../gorseller/günahkarlar.jpg",
        aciklama: "2 sa 11 dk/ Korku",
        genelbakis: "İkiz kardeşler Elijah ve Elias Smoke, tanıdık bir zeminde yeni bir başlangıç ​​yapmak isterler. Böylece Chicago'nun yeraltı dünyasındaki eski hayatlarını geride bırakıp, memleketleri Clarksdale, Mississippi'ye dönerler ve orada bir bar açarlar. Ancak ikizleri orada sakin bir hayat beklememektedir.",
        video: "https://youtu.be/k8ZdoeroiD0?si=UJ2rV84ijMHbCOy0" ,
      },
      {
        ad: "Hay Hak",
        resim: "../gorseller/hayhak.jpg",
        aciklama: "1 sa 18 dk/ Animasyon",
        genelbakis: "Dört yıl boyunca kaybolduktan sonra köylerine geri dönen sakar ikili Hacivat ve Karagöz, artık nüfustan bile silindiklerini öğrenince, köylülerin sevgisini kazanmak için herkese yardım etmeye karar verir. Ancak iyi niyetle başladıkları her iş, köyde tam bir felakete dönüşerek büyük bir kaosa sebep olur.",
        video: "https://youtu.be/ePtsnOIsYuU?si=TdJ0YFvEXTe2dXu-" ,
      },
      {
        ad: "Üç Harfliler: Fal",
        resim: "../gorseller/fal.jpg",
        aciklama: "1 sa 30 dk/ Korku",
        genelbakis: "İrem, üniversite mezuniyetinden sonra kırsalda yaşayan ailesinin yanına döner. Fakat burada geçmişin karanlık sırlarıyla yüzleşmeye hazırlıklı değildir. Evde yalnızca yatalak annesi, içine kapanık babası ve birlikte büyüdüğü kuzenleri değil, gömülü acıları da bulunmaktadır. İrem'in döndüğü gece anneannesi bir anda hayatını kaybeder. Bunu takiben tuhaflıklar ardı arkası kesilmez şekilde devam eder.",
        video: "https://youtu.be/7DHP0SMzOWw?si=V8j0OdWNIxMchU2L" ,
      },
      {
        ad: "Büyük Macera 3: Çılgın Dostlar",
        resim: "../gorseller/çılgındostlar.jpg",
        aciklama: "1 sa 25 dk/ Animasyon",
        genelbakis: "Ayı Mic Mic, ailesi ve arılarıyla mutlu bir hayat sürme hayali kurar. Fakat bir gün işbilmez bir leylek kapısına yine yanlış bir bebek getirdiğinde planları suya düşer. Mic Mic işleri yoluna koymak için yeniden bir maceraya atılmalıdır",
        video: "https://youtu.be/reM9KYZZZQ0?si=cx7_GCLr5FNr2uiu" ,
      },
      {
        ad: "Leon: Sevginin Gücü",
        resim: "../gorseller/leon.jpg",
        aciklama: "2 sa 12 dk/ Romantik",
        genelbakis: "Mathilda, New York'ta yaşayan ailesi dağılmış 12 yaşında küçük bir kızdır. Ailesini sevmeyen Mathilda için en değerli varlığı küçük kardeşidir. Babası uyuşturucu işlerine bulaşınca mafya ailenin tüm bireylerini öldürür. O sırada alışverişte olan Mathilda ise olaydan kılpayı kurtulur ve Leon'un kaldığı daireye saklanır. Leon ise çok soğukkanlı bir katildir. Ancak Mathilda'ya karşı içten bir sevgi besler ve ona kol kanat gerer. Aslında babalık, arkadaşlık gibi kavramlar ona çok yabancıdır.",
        video: "https://youtu.be/aNQqoExfQsg?si=xo1uGfh-Lw1lpv87" ,
      },
  ];
  
  const filmListesi = document.getElementById("filmListesi");
  
  filmler.forEach((film) => {
    const kart = document.createElement("div");
    kart.className = "film-karti";

    const resim = document.createElement("img");
  resim.src = film.resim;
  resim.alt = film.ad;
  resim.className = "film-resmi";

  const ad = document.createElement("h3");
  ad.textContent = film.ad;

  const aciklama = document.createElement("h4");
  aciklama.textContent = film.aciklama;

 const buton = document.createElement("button");
buton.className = "rezervasyon-buton";
buton.textContent = "Rezervasyon Yap";
buton.dataset.filmAd = film.ad;

// Butona tıklanınca çalışacak fonksiyon
buton.addEventListener("click", function () {
  const secilenFilm = this.dataset.filmAd;
  alert(`Rezervasyon başlıyor: ${secilenFilm}`);
});

  
  const oynat = document.createElement("button");
  oynat.className = "oynat-buton";

  
  const oynatIkonu = document.createElement("img");
  oynatIkonu.src = "../gorseller/oynatbutonu.png";  
  oynatIkonu.alt = "Oynat";
  oynatIkonu.className = "oynat-ikon";         // CSS ile stil vereceksen

  oynat.appendChild(oynatIkonu);

  oynat.addEventListener("click", () => {
    window.open(film.video, "_blank");
  });

  const tooltip = document.createElement("div");
  tooltip.className = "tooltip";
  tooltip.textContent = `Genel Bakış: ${film.genelbakis}`;

  kart.appendChild(resim);
  kart.appendChild(ad);
  kart.appendChild(buton);
  kart.appendChild(tooltip);
  kart.appendChild(aciklama); 
  kart.appendChild(oynat);
  
  filmListesi.appendChild(kart);
});
  
function sepeteEkle(film) {
  const sepet = JSON.parse(localStorage.getItem("sepet")) || [];

  const zatenVar = sepet.find(f => f.ad === film.ad);
  if (!zatenVar) {
    sepet.push(film);
    localStorage.setItem("sepet", JSON.stringify(sepet));
    alert(`${film.ad} sepete eklendi.`);
  } else {
    alert("Bu film zaten sepette.");
  }
}  

// Tek bir kere tıklama olayını dinle
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("rezervasyon-buton")) {
    const filmAdi = e.target.dataset.filmAd;
    const secilenFilm = filmler.find(f => f.ad.toLowerCase() === filmAdi.toLowerCase());

    if (secilenFilm) {
      sepeteEkle(secilenFilm);
    }
  }
});
  
  function asagiKaydir() {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  }
  
  function yukariKaydir() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  
  window.addEventListener('scroll', function () {
    const asagiBtn = document.getElementById('asagiBtnContainer');
    const yukariBtn = document.getElementById('yukariBtnContainer');
    const scrollPos = window.scrollY + window.innerHeight;
    const pageHeight = document.body.scrollHeight;
  
    // Eğer en aşağıdaysa
    if (scrollPos >= pageHeight - 10) {
      asagiBtn.style.display = 'none';
      yukariBtn.style.display = 'block';
    } else {
      asagiBtn.style.display = 'block';
      yukariBtn.style.display = 'none';
    }
  });


const aramaKutusu = document.querySelector(".arama-kutusu");
const aramaButon = document.querySelector(".arama-buton");

function filmleriListele(filmlerArray) {
  filmListesi.innerHTML = ""; // Önce listeyi temizle

  if (filmlerArray.length === 0) {
    filmListesi.innerHTML = "<p style='color:white;'>Hiçbir film bulunamadı.</p>";
    return;
  }

  filmlerArray.forEach((film) => {
    const kart = document.createElement("div");
    kart.className = "film-karti";

    const resim = document.createElement("img");
    resim.src = film.resim;
    resim.alt = film.ad;
    resim.className = "film-resmi";

    const ad = document.createElement("h3");
    ad.textContent = film.ad;

    const aciklama = document.createElement("h4");
    aciklama.textContent = film.aciklama;

    const buton = document.createElement("button");
    buton.className = "rezervasyon-buton";
    buton.textContent = "Rezervasyon Yap";
    buton.dataset.filmAd = film.ad;


    const oynat = document.createElement("button");
    oynat.className = "oynat-buton";

    const oynatIkonu = document.createElement("img");
    oynatIkonu.src = "../gorseller/oynatbutonu.png";
    oynatIkonu.alt = "Oynat";
    oynatIkonu.className = "oynat-ikon";

    oynat.appendChild(oynatIkonu);
    oynat.addEventListener("click", () => {
      window.open(film.video, "_blank");
    });

    const tooltip = document.createElement("div");
    tooltip.className = "tooltip";
    tooltip.textContent = film.genelbakis;

    kart.appendChild(resim);
    kart.appendChild(ad);
    kart.appendChild(aciklama);
    kart.appendChild(buton);
    kart.appendChild(oynat);
    kart.appendChild(tooltip);

    filmListesi.appendChild(kart);
  });
}

// İlk başta tüm filmleri listele
filmleriListele(filmler);

// Filtreleme fonksiyonu
function filtreleFilmler() {
  const aramaMetni = aramaKutusu.value.toLowerCase();

  const filtrelenmis = filmler.filter(film => {
    return (
      film.ad.toLowerCase().includes(aramaMetni) ||
      film.aciklama.toLowerCase().includes(aramaMetni) ||
      film.genelbakis.toLowerCase().includes(aramaMetni)
    );
  });

  filmleriListele(filtrelenmis);
}

aramaKutusu.addEventListener("input", filtreleFilmler);
aramaButon.addEventListener("click", filtreleFilmler);

