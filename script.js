const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const navItems = [...document.querySelectorAll('.nav-item')];
const video = document.querySelector('.hero-video');
const videoButton = document.querySelector('.video-toggle');
const chat = document.querySelector('.chat');
const chatCard = document.querySelector('.chat-card');
const chatLaunch = document.querySelector('.chat-launch');

menuButton?.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!open));
  navLinks.classList.toggle('open', !open);
  document.body.style.overflow = open ? '' : 'hidden';
});

navItems.forEach((item) => {
  const button = item.querySelector(':scope > button');
  button?.addEventListener('click', (event) => {
    event.stopPropagation();
    const willOpen = !item.classList.contains('open');
    navItems.forEach((other) => {
      other.classList.remove('open');
      other.querySelector(':scope > button')?.setAttribute('aria-expanded', 'false');
    });
    item.classList.toggle('open', willOpen);
    button.setAttribute('aria-expanded', String(willOpen));
  });
});

document.addEventListener('click', (event) => {
  if (!event.target.closest('.nav-item')) {
    navItems.forEach((item) => {
      item.classList.remove('open');
      item.querySelector(':scope > button')?.setAttribute('aria-expanded', 'false');
    });
  }
});

videoButton?.addEventListener('click', async () => {
  if (video.paused) {
    await video.play();
    videoButton.textContent = 'Ⅱ';
    videoButton.setAttribute('aria-label', 'Pause background video');
  } else {
    video.pause();
    videoButton.textContent = '▶';
    videoButton.setAttribute('aria-label', 'Play background video');
  }
});

chatCard?.addEventListener('click', () => chat.classList.add('closed'));
chatLaunch?.addEventListener('click', () => chat.classList.toggle('closed'));

document.getElementById('year').textContent = new Date().getFullYear();

window.addEventListener('resize', () => {
  if (window.innerWidth > 767) {
    navLinks.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }
});
