const cursor = document.querySelector('.cursor');
const blur = document.querySelector('.cursor-blur');

window.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';

  blur.style.left = e.clientX + 'px';
  blur.style.top = e.clientY + 'px';
});
