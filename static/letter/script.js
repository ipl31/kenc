const filters = document.querySelectorAll('[data-filter]');
filters.forEach(button => button.addEventListener('click', () => {
  filters.forEach(filter => filter.setAttribute('aria-pressed', String(filter === button)));
  document.querySelectorAll('[data-kind]').forEach(piece => {
    piece.hidden = button.dataset.filter !== 'all' && piece.dataset.kind !== button.dataset.filter;
  });
}));
