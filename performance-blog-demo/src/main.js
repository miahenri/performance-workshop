// CLS verbessert:
// CSS wird im <head> eingebunden, damit die reservierten Bereiche für Banner und Video direkt sichtbar sind.

// CLS verbessert:
// Der Banner wird weiterhin dynamisch eingefügt,
// aber der Container hat vorher schon eine feste Mindesthöhe.
// Dadurch verschiebt sich der restliche Inhalt nicht.
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
  // INP verbessert:
  // Sofort sichtbares Feedback geben.
  button.textContent = 'Kommentare werden geladen...';
  button.disabled = true;

  // Dem Browser kurz Zeit geben, den Button-Zustand zu rendern,
  // bevor neue Inhalte erzeugt werden.
  requestAnimationFrame(() => {
    renderCommentsInChunks(60);
  });
});

function renderCommentsInChunks(totalComments) {
  const chunkSize = 10;
  let currentIndex = 1;

  function renderNextChunk() {
    const fragment = document.createDocumentFragment();

    for (
      let i = 0;
      i < chunkSize && currentIndex <= totalComments;
      i++, currentIndex++
    ) {
      const comment = document.createElement('div');
      comment.className = 'comment';

      comment.innerHTML = `
        <strong>Kommentar ${currentIndex}</strong>
        <p>
          Sehr spannender Artikel. Besonders interessant finde ich,
          wie stark JavaScript die wahrgenommene Performance beeinflussen kann.
        </p>
      `;

      fragment.appendChild(comment);
    }

    commentsList.appendChild(fragment);

    if (currentIndex <= totalComments) {
      // Arbeit auf mehrere kleine Tasks verteilen,
      // damit der Main Thread zwischendurch frei bleibt.
      setTimeout(renderNextChunk, 0);
    } else {
      button.textContent = 'Kommentare geladen';
    }
  }

  renderNextChunk();
}