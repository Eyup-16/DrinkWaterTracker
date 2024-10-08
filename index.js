const smallCups = document.querySelectorAll('.cups-small');
const BigCup = document.querySelector('.cup');
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');

smallCups.forEach((small_cup, idx) => {
  small_cup.addEventListener('click', () => HighlightCups(idx));
});

function HighlightCups(idx) {
  if (smallCups[idx].classList.contains('full')) {
    if (
      !smallCups[idx].nextElementSibling ||
      !smallCups[idx].nextElementSibling.classList.contains('full')
    ) {
      idx--;
    } else {
      smallCups[idx].classList.remove('full');
    }
  }
  smallCups.forEach((cup, idx2) => {
    if (idx2 <= idx) {
      cup.classList.add('full');
    } else {
      cup.classList.remove('full');
    }
  });

  UpdateBigCup();
}

function UpdateBigCup() {
  const fullCups = document.querySelectorAll('.cups-small.full').length;
  const totalCups = smallCups.length;

  if (fullCups === 0) {
    percentage.style.visibility = 'hidden';
    percentage.style.height = 0;
  } else {
    percentage.style.visibility = 'visible';
    percentage.style.height = `${(fullCups / totalCups) * 200}px`;
    percentage.innerHTML = `${(fullCups / totalCups) * 100}%`;
  }

  if (fullCups === totalCups) {
    remained.style.visibility = 'hidden';
    remained.style.height = 0;
  } else {
    remained.style.visibility = 'visible';
    liters.textContent = `${2 - (250 * fullCups) / 1000}L`;
    // remained.style.height = `${fullCups / totalCups}`;
  }
}
