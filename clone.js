const chat = document.querySelector('.clone-chat');
const card = document.querySelector('.clone-chat-card');
const launcher = document.querySelector('.clone-chat-launch');

card?.addEventListener('click', () => chat.setAttribute('data-closed', ''));
launcher?.addEventListener('click', () => chat.toggleAttribute('data-closed'));
