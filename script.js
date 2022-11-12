import anime from 'animejs';

const messages = document.querySelectorAll('.message');
const introduction = document.querySelector('.introduction');

const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

if (!mediaQuery.matches) {
  messages.forEach((message, index) =>
    anime({
      targets: message,
      opacity: [0, 1],
      scale: [0, 1],
      duration: 500,
      delay: index * 1000,
      easing: 'easeInOutQuad',
    })
  );

  anime({
    targets: introduction,
    opacity: [0, 1],
    translateY: ['30%', 0],
    duration: 500,
    easing: 'easeInOutQuad',
  });
}
