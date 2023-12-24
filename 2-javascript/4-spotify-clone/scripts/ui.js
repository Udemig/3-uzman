const list = document.querySelector('#list');

// arayüz fonksiyonları
export const renderCards = (songs) => {
  songs.forEach((song) => {
    // 1) div oluştur
    const div = document.createElement('div');

    // 2) carda müziğin bilgilerini ekle
    div.dataset.url = song.hub.actions.pop().uri;
    div.dataset.title = song.title;
    div.dataset.photo = song.images.coverart;

    // 3) class tanımla
    div.className = 'card';

    // 4) içeriğini belirle
    div.innerHTML = `
            <figure>
              <img
                src="${song.images.coverart}"
              />
              <div class="play">
                <i id="play-btn" class="bi bi-play-fill"></i>
              </div>
            </figure>
            <h4>${song.subtitle}</h4>
            <p>${song.title}</p>
    `;

    // 5) html'e  gönder
    list.appendChild(div);
  });
};

const playingInfo = document.querySelector('.playing');

// mizik bilghilerini bas
export const renderPlaying = (data) => {
  playingInfo.innerHTML = `
     <div class="info">
        <img src="${data.photo}" />

        <div>
          <p>Şuan Oynatılıyor</p>
          <h3>${data.title}</h3>
        </div>
      </div>

      <audio autoplay controls src="${data.url}"></audio>
    `;
};
