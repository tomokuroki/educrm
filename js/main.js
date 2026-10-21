const downloadLinks = document.querySelectorAll('a[download]');
history.scrollRestoration = 'manual';

window.addEventListener('pageshow', () => {
  window.scrollTo(0, 0);
});

window.setTimeout(() => {
  document.getElementById('site-loader')?.classList.add('is-hidden');
  document.body.classList.remove('is-loading');
}, 3000);

downloadLinks.forEach((link) => {
  let spinnerTimer;

  link.addEventListener('click', () => {
    const announcement = document.getElementById('download-announcement');
    if (announcement) announcement.textContent = 'Загрузка приложения EduFlow началась.';

    link.querySelector('.button-spinner')?.remove();
    const spinner = document.createElement('span');
    spinner.className = 'button-spinner';
    spinner.setAttribute('aria-hidden', 'true');
    link.append(spinner);
    link.setAttribute('aria-busy', 'true');

    window.clearTimeout(spinnerTimer);
    spinnerTimer = window.setTimeout(() => {
      spinner.remove();
      link.removeAttribute('aria-busy');
    }, 2000);
  });
});

const announcement = document.createElement('div');
announcement.id = 'download-announcement';
announcement.setAttribute('aria-live', 'polite');
announcement.className = 'visually-hidden';
document.body.append(announcement);

