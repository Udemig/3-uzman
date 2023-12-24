// istek atıcağımız url
const url =
  'https://shazam.p.rapidapi.com/charts/track?locale=tr&pageSize=20&startFrom=0';

//   İSTEK ATARKEN GÖNDERMMEİZ GEREKEN AYARLAR
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key':
      '554b5c9a03msh4a008333f18e61ap1fb405jsnbaa4227abd20',
    'X-RapidAPI-Host': 'shazam.p.rapidapi.com',
  },
};

// poüler müzikler için api isteği atar ve
// cevabı fonksyionun çağrıldığı yere gönderir
export const getPopular = async () => {
  // api isteği atar
  const res = await fetch(url, options);

  // gelen veriyi işle
  const data = await res.json();

  // fonksiyonun çağrıldığı yere gönder
  return data.tracks;
};
