const filters = document.querySelectorAll('[data-filter]');
const empty = document.querySelector('.writing-empty');
filters.forEach(button => button.addEventListener('click', () => {
  filters.forEach(filter => filter.setAttribute('aria-pressed', String(filter === button)));
  let shown = 0;
  document.querySelectorAll('[data-kind]').forEach(piece => {
    piece.hidden = button.dataset.filter !== 'all' && piece.dataset.kind !== button.dataset.filter;
    if (!piece.hidden) shown++;
  });
  if (empty) empty.hidden = shown > 0;
}));
