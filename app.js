//set initial count
let count = 0;

// select value and buttons

const value = document.querySelector('#value');
const buttons = document.querySelectorAll('.btn');
buttons.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains('decrease')) {
      count--;
    } else if (styles.contains('increase')) {
      count++;
    } else {
      count = 0;
    }
    switch (true) {
      case count > 0:
        value.style.color = 'green';
        break;
      case count < 0:
        value.style.color = 'red';
        break;
      default:
        value.style.color = 'black';
        break;
    }

    value.textContent = count;
  });
});
