const menu = document.querySelector('.menu');
const links = document.querySelector('.nav-links');
const mediaLinks = [
  'https://kinescope.io/eA21ggk34mH8oHEsvL3kzo',
  'https://kinescope.io/bRowEA8NYr9DQ2sjeVxua4',
  'https://kinescope.io/exECRjDZAP3f9Kr6SiShLq',
];
const documentLinks = [
  'assets/playlist.xlsx',
  'assets/tech-rider.xlsx',
  'https://t.me/pr_productions',
];
const downloadRows = document.querySelectorAll('.download-row');
const downloadLabels = ['ПЛЕЙЛИСТ ГРУППЫ', 'ТЕХРАЙДЕР ГРУППЫ', 'СВЯЗАТЬСЯ В TELEGRAM'];
downloadRows.forEach((row, index) => {
  const link = row.querySelector('a');
  const label = row.querySelector('strong');
  if (label && downloadLabels[index]) label.textContent = downloadLabels[index];
  if (documentLinks[index]) {
    link.href = documentLinks[index];
    if (index < 2) link.setAttribute('download', '');
  }
});

menu?.addEventListener('click', () => {
  links.classList.toggle('open');
  menu.setAttribute('aria-expanded', links.classList.contains('open'));
});

links?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => links.classList.remove('open'));
});

document.querySelectorAll('.tabs button').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.tabs button').forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
  });
});
