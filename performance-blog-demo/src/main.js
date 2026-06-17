import './style.css';

window.addEventListener('load', () => {
  setTimeout(() => {
    const adContainer = document.querySelector('#ad-container');

    const banner = document.createElement('div');
    banner.className = 'ad-banner';
    banner.textContent =
      'Anzeige: Jetzt zum kostenlosen Web-Performance-Webinar anmelden!';

    adContainer.appendChild(banner);
  }, 1800);
});

const button = document.querySelector('#load-comments');
const commentsList = document.querySelector('#comments-list');

button.addEventListener('click', () => {
  button.textContent = 'Kommentare werden geladen...';

  let uselessResult = 0;
  for (let i = 0; i < 250_000_000; i++) {
    uselessResult += Math.sqrt(i);
  }

  for (let i = 1; i <= 300; i++) {
    const comment = document.createElement('div');
    comment.className = 'comment';
    comment.innerHTML = `
      <strong>Kommentar ${i}</strong>
      <p>
        Sehr spannender Artikel. Besonders interessant finde ich,
        wie stark JavaScript die wahrgenommene Performance beeinflussen kann.
      </p>
    `;

    commentsList.appendChild(comment);
  }

  button.textContent = 'Kommentare geladen';
  console.log('Unnötiges Ergebnis:', uselessResult);
});