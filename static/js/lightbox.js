(function () {
  const gallery = document.querySelector('.gallery');
  if (!gallery) return;
  const thumbs = Array.from(gallery.querySelectorAll('a.thumb'));
  if (!thumbs.length) return;

  const dialog = document.getElementById('lightbox');
  const img = dialog.querySelector('img');
  const counter = dialog.querySelector('.counter');
  const prevBtn = dialog.querySelector('.prev');
  const nextBtn = dialog.querySelector('.next');
  const closeBtn = dialog.querySelector('.close');

  let current = 0;
  const single = thumbs.length === 1;
  if (single) {
    prevBtn.style.display = 'none';
    nextBtn.style.display = 'none';
    counter.style.display = 'none';
  }

  function show(i) {
    current = (i + thumbs.length) % thumbs.length;
    img.src = thumbs[current].href;
    counter.textContent = (current + 1) + ' / ' + thumbs.length;
  }

  thumbs.forEach((a, i) => {
    a.addEventListener('click', e => {
      e.preventDefault();
      show(i);
      dialog.showModal();
    });
  });

  prevBtn.addEventListener('click', () => show(current - 1));
  nextBtn.addEventListener('click', () => show(current + 1));
  closeBtn.addEventListener('click', () => dialog.close());

  dialog.addEventListener('click', e => {
    if (e.target === dialog) dialog.close();
  });

  document.addEventListener('keydown', e => {
    if (!dialog.open) return;
    if (e.key === 'ArrowLeft' && !single) show(current - 1);
    if (e.key === 'ArrowRight' && !single) show(current + 1);
  });
})();
