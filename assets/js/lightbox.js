document.addEventListener('DOMContentLoaded', function () {
  var links = document.querySelectorAll('[data-lightbox]');
  if (!links.length) return;

  var groups = {};
  links.forEach(function (link) {
    var group = link.getAttribute('data-lightbox');
    groups[group] = groups[group] || [];
    groups[group].push(link);
  });

  var overlay = document.createElement('div');
  overlay.className = 'lightbox-overlay';
  overlay.innerHTML =
    '<button class="lightbox-close" aria-label="Close">&times;</button>' +
    '<button class="lightbox-prev" aria-label="Previous">&#10094;</button>' +
    '<div class="lightbox-content">' +
      '<img class="lightbox-img" alt="">' +
      '<div class="lightbox-caption">' +
        '<h3 class="lightbox-title"></h3>' +
        '<p class="lightbox-prize"></p>' +
        '<p class="lightbox-info"></p>' +
      '</div>' +
    '</div>' +
    '<button class="lightbox-next" aria-label="Next">&#10095;</button>';
  document.body.appendChild(overlay);

  var imgEl = overlay.querySelector('.lightbox-img');
  var titleEl = overlay.querySelector('.lightbox-title');
  var prizeEl = overlay.querySelector('.lightbox-prize');
  var infoEl = overlay.querySelector('.lightbox-info');
  var currentGroup = [];
  var currentIndex = 0;

  function show(index) {
    currentIndex = (index + currentGroup.length) % currentGroup.length;
    var link = currentGroup[currentIndex];
    imgEl.src = link.getAttribute('href');
    titleEl.textContent = link.getAttribute('data-title') || '';

    var prize = link.getAttribute('data-prize');
    prizeEl.textContent = prize ? '🏆 ' + prize : '';
    prizeEl.style.display = prize ? 'block' : 'none';

    var info = link.getAttribute('data-info');
    infoEl.textContent = info || '';
    infoEl.style.display = info ? 'block' : 'none';
  }

  function open(group, index) {
    currentGroup = groups[group];
    show(index);
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  Object.keys(groups).forEach(function (group) {
    groups[group].forEach(function (link, index) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        open(group, index);
      });
    });
  });

  overlay.querySelector('.lightbox-close').addEventListener('click', close);
  overlay.querySelector('.lightbox-prev').addEventListener('click', function () { show(currentIndex - 1); });
  overlay.querySelector('.lightbox-next').addEventListener('click', function () { show(currentIndex + 1); });
  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) close();
  });
  document.addEventListener('keydown', function (e) {
    if (!overlay.classList.contains('open')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') show(currentIndex - 1);
    if (e.key === 'ArrowRight') show(currentIndex + 1);
  });
});
