// Javascript Es6 sürümünden önce değişkenler var ile tanımlanıyordu
// Ama ES6 sürümü ile birlikte iki yeni değişken eklendi ve artık var "rafa kalktı"

//! Değişken Güncellemesi

// * var (eski)
//- Javascriptin es5 ve önceki sürümlerinde kullanılır
//- var, yeni olan let ve const a göre daha maliyetli
//- var ile tqanımlana değişkeni değiştrebilebiliriz
var username = 'arin';
username = 'ahmet';

// * let
//- Javascriptin es6 ve sonraki sürümlerinde kullanılır
//- var'a göre daha az maliyetli
//- let ile tanımlanan değişken daha sonrada değiştirelebilir
let username2 = 'mehmet';
username2 = 'ali';

// * const
//- Javascriptin es6 ve sonraki sürümlerinde kullanılı
//- var'a göre daha az maliyetli
//- const ile ranımlana değişkene yeni bir değer ataması yapıalamaz
const username3 = 'ayşe';
// username3 = 'fatma'; // err: assignment to constant variable.

//! Fonksiyon Güncellemesi
// es5 ve önceki sürümlerde function anahtar kelimesi ile fonksiyon oluşturuyorduk
// es6 ile birlikte ok fonksiyponlar hayatımıza girdi
// ok fonksiyonlarda normal fonksiyonları aynı görevi yapar
// sadece yazım stilinde bazı farklılıklar mevcut
//  bu farklılar fonksiyonu daha okunabilir yapar ve bizi hızlandırır

//* ES5 sürümü Fonksiyonu
function multiply(sayi) {
  return sayi * 5;
}

//* ES6 sürümü Ok (Arrow) Fonksiyonu
const multiply2 = (sayi) => {
  return sayi * 5;
};

//* Ok fonskiyonda süslü parantez kullanılmazsa oto. return eder
// tek parametre olunca () gerek kalmaz
const multiply3 = sayi => sayi * 5;

// birden fazla parametre varsa veya hiç yoksa () koyulması gerekir
const multiply4 = (sayi1,sayi2) => sayi1 * sayi2;

// fonksiyonu çağırmada herhangi farklılık yok
multiply(213)
multiply2(123)
multiply3(5)
multiply4(10,20)



//! Spread (Dağıtma) Operatörü Eklendi > ...
// Bir dizideki veya objediki verileri başka bir
// alana dağıtmaya (aktarmaya) yarar

//* Örnek-1
const sayilar = [123,465,234,123,56,2134,45]

const maks = Math.max(...sayilar)
console.log(maks)

//* Örnek-2
const kisi = {
  name:"ahmet",
  surname:"yıldız"
}
// yeni bir çalışan objesi oluşturmak istiyoruz
// bu objede hem kişinin bütün veirleri olsun
// hemde yeni bazı özellikler olsun
const calisan = {
  ...kisi,
  telefon:"034246346456"
}

console.log(calisan)