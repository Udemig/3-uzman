import { getPopular } from './scripts/api.js';
import { renderCards, renderPlaying } from './scripts/ui.js';

const list = document.querySelector('#list');

// sayfa yüklenmesini izle
document.addEventListener('DOMContentLoaded', () => {
  // api'den verileri al
  getPopular()
    // api den gelen müzikler için ekrana kartlar bas
    .then((data) => renderCards(data));
});

// liste alanındaki tıklanma olaylarınız ile
list.addEventListener('click', (e) => {
  if (e.target.id === 'play-btn') {
    // kartı al
    const card = e.target.closest('.card');

    // müziği oynat
    renderPlaying(card.dataset);
  }
});
