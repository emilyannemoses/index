var isFlipped = false;
function flipper(n){
  var flipper = document.getElementById('flipper' + n);

  if (!isFlipped){
    flipper.style.transform = 'rotateY(-180deg)';

    isFlipped = true;
  } else {
    flipper.style.transform = 'rotateY(0deg)';

    isFlipped = false;
  }
}