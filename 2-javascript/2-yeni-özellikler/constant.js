// Bir dosyasnın içersindeki bir değişkeni veya fonksiyonu
// Başka bir dosyanın içerisnde kullanılabilir hale getirir

export const yeniKisiler = [
  { tcNo: 35237664213, isim: 'Ahmet', soyisim: 'Yıldız' },
  { tcNo: 12314324234, isim: 'Ayşe', soyisim: 'Gül' },
  { tcNo: 76986862341, isim: 'Fatma', soyisim: 'Kaya' },
  { tcNo: 123, isim: 'Fatma', soyisim: 'Kaya' },
  { tcNo: 23, isim: 'Fatma', soyisim: 'Kaya' },
  { tcNo: 324234, isim: 'Fatma', soyisim: 'Kaya' },
  { tcNo: 435, isim: 'Fatma', soyisim: 'Kaya' },
  { tcNo: 543, isim: 'Fatma', soyisim: 'Kaya' },
  { tcNo: 7698654345, isim: 'Fatma', soyisim: 'Kaya' },
  { tcNo: 7698654456862341, isim: 'Fatma', soyisim: 'Kaya' },
  { tcNo: 76986845662341, isim: 'Fatma', soyisim: 'Kaya' },
];

// her bir dosyada bir tane varayılan export etme hakkımız var
// varsayılan export sayesinde öbür dosylarda impor termek daha kolay oluyor
// genelde dosyadki en önemli veriyi varsayılan export ederiz

export default function getData() {}
