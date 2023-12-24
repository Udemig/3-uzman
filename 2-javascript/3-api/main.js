// BİR VERİ ÇEKME API İSTEĞİ AT
// api isteklerinde fetch methodu kullanırız
// fetch methodunun ilk parametresine api ur'ini ekleriz
// 2. paramtreye ise istek tipini ve gerekli ayarlar tanımlanır
const renderProducts = (products) => {
  document.body.innerHTML = products
    .map(
      (item) => `
    <div>
       <p>${item.id}</p>
        <h2>${item.title}</h2>
    </div>`
    )
    .join(' ');
};

// // 1. yöntem > then - catch
// const getData = () => {
//   fetch('https://dummyjson.com/products')
//     // istek başarılı olursa çalışır ve cevabı alır ve işler
//     .then((cevap) => cevap.json())
//     // işlene cevabı alma
//     .then((veri) => console.log('1.data', veri))
//     // hata olduğu durumda hatayı yakalar
//     .catch((hata) => console.log(hata));
// };
// getData();

// 2. yöntem > async await
// yaptığımız veritabanı istekleri asenkron yaznı gerçekleşmesi
// zaman alan işlemlerdir
const getData2 = async () => {
  try {
    // await sayesinde cevap gelemesini bekleriz
    const res = await fetch('https://dummyjson.com/products');

    // await ile cevabın işlenemsini bekleriz
    const data = await res.json();

    renderProducts(data.products);
  } catch (err) {
    console.log(err);
  }
};
getData2();

// //! SİLME İSTEĞİ
// // veritbanaından silinen veriler geri alınmayacğı
// // için bu işlemi dikkatli yapmalıyız

// const deleteProduct = async (id) => {
//   // silme isteklerinde url'in sonuna silincek elemaın id'si eklnmeli
//   const res = await fetch(`https://dummyjson.com/products/${id}`, {
//     method: 'DELETE',
//   });

//   const data = await res.json();

//   console.log(data);
// };

// deleteProduct(4);
// deleteProduct(7);
// deleteProduct(9);

//! EKleme İSTEĞİ > POST
// ekleme isteklerinde isteğin body kısmına göndericeğimiz içeriği ekleriz
// ve içeriği her zaman stringe / json verisine çeviririrz
const addProduct = async (newProduct) => {
  const res = await fetch('https://dummyjson.com/products/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newProduct),
  });

  const data = await res.json();

  console.log(data);
};

addProduct({
  title: 'Klavye',
  brand: 'Logitech',
  price: 5000,
  rating: 4.8,
});

//! Güncelleme İSTEĞİ > POST
// urlin sonuna güncellenicek elemanın idsini ekleri
// body kısmına ise güncel veriler eklenir

const updateProduct = async (updated) => {
  const res = await fetch(
    `https://dummyjson.com/products/${updated.id}`,
    {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updated),
    }
  );

  const data = await res.json();

  console.log(data);
};

updateProduct({
  id: 11,
  title: 'iphone15',
});
