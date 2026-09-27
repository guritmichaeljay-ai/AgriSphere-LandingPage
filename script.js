document.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) window.lucide.createIcons();

  const header = document.querySelector('.site-header');
  if (header) {
    const handleScroll = () => {
      header.classList.toggle('is-scrolled', window.scrollY > 12);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
  }
});
