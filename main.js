// God's Project Company — shared site behavior

document.addEventListener('DOMContentLoaded', function () {
  // Mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var isOpen = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        links.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Footer year
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Contour line draw-in animation on hero (respects reduced motion via CSS)
  var contourPaths = document.querySelectorAll('.hero-contours path, .page-header-contours path');
  contourPaths.forEach(function (path, i) {
    var length = path.getTotalLength ? path.getTotalLength() : 0;
    if (!length) return;
    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;
    path.style.transition = 'stroke-dashoffset 1.8s ease-out';
    path.style.transitionDelay = (i * 0.12) + 's';
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        path.style.strokeDashoffset = '0';
      });
    });
  });
});
