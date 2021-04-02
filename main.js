let currentTable = 0;

const $tables = [
  document.getElementById('main-currency-table'),
  document.getElementById('main-comission-table'),
];

const $prevBtn = document.querySelector('.main-tables__prev-btn');
const $nextBtn = document.querySelector('.main-tables__next-btn');

const changeTable = (n) => {
  if (n >= 0 && n < $tables.length) {
    $tables.forEach(($table, i) => {
      $table.style.display = i === n ? 'block' : 'none';
    });
    $prevBtn.style.display = n === 0 ? 'none' : 'block';
    $nextBtn.style.display = n === $tables.length - 1 ? 'none' : 'block';
    currentTable = n;
  }
};

$prevBtn.addEventListener('click', () => changeTable(currentTable - 1));
$nextBtn.addEventListener('click', () => changeTable(currentTable + 1));
window.onload = () => changeTable(0);
