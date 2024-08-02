onload = () => {
  document.body.classList.remove("container");

  const box = document.querySelector('.top-center-box');

  box.addEventListener('mouseenter', () => {
    createButterflies();
  });

  box.addEventListener('mouseleave', () => {
    removeButterflies();
  });

  function createButterflies() {
    for (let i = 0; i < 5; i++) {
      const butterfly = document.createElement('div');
      butterfly.classList.add('butterfly');
      butterfly.style.left = `${Math.random() * window.innerWidth}px`;
      butterfly.style.top = `${Math.random() * window.innerHeight}px`;

      // Seleccionar aleatoriamente entre las dos imágenes
      const butterflyType = Math.random() < 0.5 ? 'butterfly.png.webp' : 'butterfly2.png';
      butterfly.style.backgroundImage = `url(images/${butterflyType})`;

      document.body.appendChild(butterfly);

      // Eliminar la mariposa después de 5 segundos
      setTimeout(() => {
        butterfly.remove();
      }, 5000);
    }
  }

  function removeButterflies() {
    const butterflies = document.querySelectorAll('.butterfly');
    butterflies.forEach(butterfly => butterfly.remove());
  }
};