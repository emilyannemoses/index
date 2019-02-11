var pyA = document.querySelector('.py-a');
var pyB = document.querySelector('.py-b');
var pyC = document.querySelector('.py-c');

pyA.addEventListener('keyup', calcPyC);
pyB.addEventListener('keyup', calcPyA);
pyC.addEventListener('keyup', calcPyB);

function calcPyC(event) {
  if (pyA.value.length > 0 && pyB.value.length > 0) {
    pyC.value = calcLongestSide(pyA.value, pyB.value)
  } else {
    pyC.value = '';
  }
}
function calcPyA(event) {
  if (pyB.value.length > 0 && pyC.value.length > 0) {
    pyA.value = calcSideA(pyB.value, pyC.value)
 } else {
    pyA.value = '';
  }
}
function calcPyB(event) {
  if (pyA.value.length > 0 && pyC.value.length > 0) {
    pyB.value = calcSideB(pyA.value, pyC.value)
  } else {
    pyB.value = '';
 }
}




var r = document.querySelector('.circum-r');
var c = document.querySelector('.circum-c');

r.addEventListener('keyup', calcC);

function calcC(event) {
  if (r.value.length > 0) {
    c.value = calcCircumference(r.value)
  } else {
    c.value = '';
  }
}

var tempF = document.querySelector('.temp-f');
var tempC = document.querySelector('.temp-c');

tempF.addEventListener('keyup', calcFtoC);
tempC.addEventListener('keyup', calcCtoF);

function calcFtoC(event) {
  if (tempF.value.length > 0) {
    tempC.value = calcFahrenheitToCelcius(tempF.value)
  } else {
    tempC.value = '';
  }
}

function calcCtoF(event) {
  if (tempC.value.length > 0) {
    tempF.value = calcCelciusToFarenheit(tempC.value)
  } else {
    tempF.value = '';
  }
}