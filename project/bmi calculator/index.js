const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const btn1 = parseInt(document.getElementById('height').value);
  const btn2 = parseInt(document.getElementById('weight').value);
  const result = document.querySelector('#results');

  if (btn1 === '' || btn1 < 0 || isNaN(btn1)) {
    console.log('please enter valid height');
  } else if (btn2 === '' || btn2 < 0 || isNaN(btn2)) {
    console.log('please enter valid weight');
  } else {
    const bmi = (btn2 / ((btn1 * btn1) / 10000)).toFixed(2);
    result.innerHTML = `<span>${bmi}</span>`;
  }
});
