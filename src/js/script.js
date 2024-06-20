var x2 = document.getElementById('2x')
var x5 = document.getElementById('5x')
var x10 = document.getElementById('10x')
var x100 = document.getElementById('100x')

function rainbow(but_id) {
  /*
  but_id takes document.getelementbyid('id') as argument
   */
  but_id.addEventListener('click', function () {
    const button = this;
    button.classList.add('rainbow');

    setTimeout(function () {
      button.classList.remove('rainbow');
    }, 10000);
  });
}

rainbow(x2);
rainbow(x5);
rainbow(x10);
rainbow(x100);
