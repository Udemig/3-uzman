// farklı dosyalardan export edilen değişkenleri mevcut dosyaya aktarmak için kullanılır
import { yeniKisiler } from './constant.js';
// default export edilen verileri import ederken {} kullanmıyoruz
// ve import ederken isrtedğimiz imi verebiliyoruz
import verileriAl from './constant.js';

//* 1) for of loop
//* Javascript for of döndgüsü , bir diziyi dönmek
//* için kullanılır. Bu döngü dizinin her bir elemanını
//* ziyaret eder ve belirtilen değişkeni kullanarak
//* her eleman üzerinde işlem yapmamızı sağlar
const kullanicilar = ['ahmet', 'mehmet', 'ali', 'ayşe'];

for (const kullanici of kullanicilar) {
  // bu kod bloğu dizideki eleman sayısı kadar çalışır
  // her dizideki eleman erişmek için tanımlaıdğımız değişkeni kullanırız
  document.write(kullanici + '<br>');
}

const metin = 'Merhaba Dünya';

for (const harf of metin) {
  document.write(harf + '<br>');
}

//* 2) Class (Sınıf)
//* Sınıf obje tabanlı programlama dillerinde nesne oluşturmayı
//* ve yönetmeyi sağlar.

// class olmadan
const araba1 = {
  marka: 'Ford',
  model: 'Focus',
  year: 1998,
};

const araba2 = {
  marka: 'Audi',
  model: 'a5',
  year: 2006,
};

// class ile birlikte
class Araba {
  constructor(param1, param2, param3) {
    this.marka = param1;
    this.model = param2;
    this.year = param3;
  }
}

// araba sınıfında bir nesne oluşturalım
const araba3 = new Araba('Ford', 'Mustang', 2020);
const araba4 = new Araba('Mercedes', 'sls', 2023);
const araba5 = new Araba('BMW', 'M3', 2000);

console.log(araba3, araba4, araba5);

// İstediğini bir yapının class'ını oluşturun
// constructor kıımında en az iki tane parametre alın
// sınıfa en az bir tane method/fonksiyon ekleyin
// Oluşturdğunu bu sınıftan new anahar kelimesi ile bir obje oluşturun

class Insan {
  constructor(param1, param2) {
    this.ad = param1;
    this.yas = param2;
  }

  selamVer() {
    console.log(
      `Merhaba benim adım ${this.ad} ve ben ${this.yas} yaşındayım`
    );
  }

  yasArttir() {
    this.yas++;
    console.log(`Yaşım bir yıl arttı. Yeni Yaşım: ${this.yas}`);
  }
}

// sınıftan bir nense/obje oluşturalım
const insan1 = new Insan('Ahmet', 25);
const insan2 = new Insan('Ayşe', 30);

insan1.selamVer();
insan2.selamVer();

insan1.yasArttir();
insan2.yasArttir();

// örnek
class Oyun {
  constructor(param1, param2) {
    this.isim = param1;
    this.yili = param2;
  }

  oyunuAc() {
    console.log(` ${this.isim} adlı oyun açılıyor`);
  }

  oyunKontrol() {
    console.log(
      `${this.isim} adlı oyun ${this.yili} yılında çıkmıştır`
    );
  }
}

const oyun1 = new Oyun('TF2', 2007);
const oyun2 = new Oyun('CS2', 2023);

oyun1.oyunKontrol();
oyun1.oyunuAc();

oyun2.oyunKontrol();
oyun2.oyunuAc();

//* 3) Yeni Eklenen String methodları

// String.Includes();
// Bir metnin bir kelimeyi veya harfi içerip içermediğini kontrol eder
const mesaj = 'Merhaba, Dünya!';

console.log(mesaj.includes('Merhaba'));

// String.startsWith();
// Ber metin belirlediğimiz kelimeyle başlıyor mu kontrol eder
const yazi = 'Herkese, İyi akşamlar, bugün sizinle...';

console.log(yazi.startsWith('Herkese'));

// String.endsWith();
// Ber metin belirlediğimiz kelimeyle bitiyor mu kontrol eder
console.log(yazi.endsWith('...'));

//* 4) Yeni Eklenen Dizi Methodları

// Array.keys()
// Bir dizinin indexlerini içeren bir dizi döndürür

const kisiler = ['Ahmet', 'Mehmet', 'Ali'];

console.log(kisiler.keys());

// Array.From()
// Dizi benzeri yapıları dizilere çevirmek için kullanılır

console.log(Array.from(kisiler.keys()));

// Array.find()
// Diszi içerisndeki belirli koşulu sağlayan ilk öğeyi bulur

// find geriye bulduğu değeri döndürür
const bulunan = yeniKisiler.find((kisi) => kisi.tcNo === 35237664213);

console.log(bulunan);

// Array.findIndex()
// Dizi içseisindeki bir elemanın sırasını bulmaya yarar
const bulunanSira = yeniKisiler.findIndex(
  (kisi) => kisi.tcNo === 76986862341
);

console.log(bulunanSira);

//* 5- Yeni Obje Mehodu:

// Entries methodu objeyi diziye çevirir
// dizinin içesine objenin bilegilerini yine bir dizi şeklinde ekler
// ekledği bu dizieki ilk değerler hep objenin anahtarı
// ikinci değerler ise objenin değerleridir
const kisi = {
  name: 'ahmet',
  surname: 'demir',
  yas: 40,
};

console.log(Object.entries(kisi));
