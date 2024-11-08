import { useEffect } from 'react';

export function ActionButton() {
  useEffect(() => {
    const backToTopButton = document.getElementById('backToTop');
    const whatsappButton = document.getElementById('whatsappButton');

    function toggleButtons() {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        backToTopButton.style.display = 'flex';
        whatsappButton.style.display = 'flex';
        setTimeout(() => {
          backToTopButton.style.opacity = '1';
          whatsappButton.style.opacity = '1';
        }, 10);
      } else {
        backToTopButton.style.opacity = '0';
        whatsappButton.style.opacity = '0';
        setTimeout(() => {
          backToTopButton.style.display = 'none';
          whatsappButton.style.display = 'none';
        }, 500);
      }
    }

    window.addEventListener('scroll', toggleButtons);

    return () => {
      window.removeEventListener('scroll', toggleButtons);
    };
  }, []);

  return (
    <>
      <button id="backToTop" style={{ display: 'none', opacity: 0 }}>Back to Top</button>
      <button id="whatsappButton" style={{ display: 'none', opacity: 0 }}>WhatsApp</button>
    </>
  );
}
