var easyPuzzle = " 793216 464397 2 12 14 673916 24397 73 19 4624926 7 13 27 143969 6 32147314769 2 ".split('');
//var easyPuzzle = "57 321684643 78251281456739165243978738195462492687513827514396956832147314769825".split('');
//we have to turn this string into an array because we have to locate each character in the string by its location, so we use .split to make it into an array
var mediumPuzzle = "3 48 251  5 149 3   83  964    3 87 8  6 134 4  9 8   5   8 4  1874   2 64 215   ".split('');
var hardPuzzle = "4  2  3    14   5   21 5  4  46  5  59   2  16     4 3  39    216 82          94 ".split('');
var eKey = "579321684643978251281456739165243978738195462492687513827514396956832147314769825".split('');
var mKey = "394862517756149238218357964961534872825671349473928156532786491187493625649215783".split('');
var hKey = "456289317871463259932175864324617598598342671617598423743956182169824735285731946".split('');
var color1 = "rgb(221,160,221)";
var color2 = "rgb(86,180,233)"; //don't need to put background color in CSS because its declaired here, Chaned green to blue for colorblind
var color1Code = "3 4 5 12 13 14 21 22 23 27 28 29 36 37 38 45 46 47 33 34 35 42 43 44 51 52 53 57 58 59 66 67 68 75 76 77".split(' '); //wrote this to tell the following loop to color every 3 blocks a different color
//This function builds the Sudoku grid with empty noneditable blocks
function blankBuild(){
  for (var i=0; i < 81; i++){
    if(color1Code.includes(i.toString())) //is this i number (starts at 0) in the loop in the list of number of color1Code. You have to change it to a string because the variable is a string.
    {color = color2;
    } else {
      color = color1;
    }
    var blankBlock = document.createElement("div");
    blankBlock.setAttribute("contentEditable", false);
    blankBlock.style.backgroundColor = color; //the color of the background is either color1 or color2
    blankBlock.id = ("blk"+i); // creating a dynamic id where it adds in the loops i, instead of giving each of the 81 divs an individual name
    blankBlock.className = "blocks";
    contain.appendChild(blankBlock); //putting blankBLocks into the HTML id contain which will be the container for the whole Sudoku puzzle on the page
    }
  }
function build(blockString){ //places puzzle number blocks into the array and make them editable
  for (var i = 0; i < 81; i++) {
    document.getElementById("blk"+i).style.color = "black";
    document.getElementById("blk"+i).innerHTML = (blockString[i]);
    if (document.getElementById("blk"+i).innerHTML !== ' '){
      document.getElementById("blk"+i).setAttribute("contentEditable", false); //if the block is not a space, the block will not be contentEditable
    } else{
      document.getElementById("blk"+i).setAttribute("contentEditable", true); //else will make all of the blank spaces contentEditable
      document.getElementById("blk"+i).setAttribute("onkeypress", "checkInput(event,this)"); //on the key press we're checking the input and the event which is when a key is pressed a number is put in that's pressed, the "this" is calling the specific object to the location of where to put the number and holds all of the information of the id and the appearence of the number inside each bubble
    }
  }
}
//This is using the key code to tell javascript to only allow numbers 1-9 into the bubbles using ASCII and allows only one number
function checkInput(evt, x){
var num = parseInt(evt.keyCode);
event.preventDefault();
if(num >= 49 && num <= 57){
  document.getElementById(x.id).innerHTML = num-48;
  checkCorrect();
  }
}
//The following function makes a correct guess black text color and an incorrect guess red text color
function checkCorrect(){
  var complete = true;
  for (var i = 0; i < 81; i++){ //Every time you hit a button it checks all 81 bubbles. Theyre either correct, empty or incorrect
      if (key[i] === document.getElementById('blk'+i).innerHTML) {
        document.getElementById('blk'+i).style.color = "black";
      } else {
        if (blockString===easyPuzzle){
          document.getElementById('blk'+i).style.color = "red";
        }
        complete = false; //will make sure that as long as there are empty bubbles or red digits the puzzle will not congratulate you.
      }
  }
//This says if you've completed the puzzle with all of the correct numbers they turn gold and say that you won and make sure you can't change any of the numbers after you've completed the puzzle
if (complete === true){
  for (var i = 0; i < 81; i++){
    if (blockString[i] === ' '){
      document.getElementById('blk'+i).style.color = "gold";
      document.getElementById('blk'+i).setAttribute("contentEditable", false);
    }
  }
  var congrats = document.createElement("div");
  congrats.className = "finished";
  congrats.appendChild(document.createTextNode("Puzzle Conquered!"));
  btns.appendChild(congrats);
}
//a problem I had was to make the program forget what was typed in previously every time the user wanted to start a new game. I had to specify which children had to be removed once the buttons were pressed. In this case, it’s [4] th item in the array. Objective is 0, easy is 1, medium 2, hard 3 and the board itself is 4. So, any content added to 4 is removed once the game buttons are pressed. Pressing the Objective button has no effect on this because it’s not written into the openPopup function.
}
function easyButton(){
  blockString = easyPuzzle;
  key = eKey;
  build(blockString); //menuSwap();
  btns.removeChild(btns.children[4]); //this removes the puzzle conqurered message when you click a button to play a new game and deletes any progress in the previous game
  return key, blockString;
}
function mediumButton(){
  blockString = mediumPuzzle;
  key = mKey;
  build(blockString); //menuSwap();
  btns.removeChild(btns.children[4]); //keeps giving errors when i inspect the page - why??
  return key, blockString;
}
function hardButton(){
  blockString = hardPuzzle;
  key = hKey;
  build(blockString); //menuSwap();
  btns.removeChild(btns.children[4]);
  return key, blockString;
}
//opening the popup to explain objective
function openPopup(){
  objective.classList.remove('hidden');
}
 //closing popup
function cancel() {
  var closeThis = document.querySelector(".popup:not(.hidden)"); //i got this from Lindsey's presentation.
   closeThis.classList.add('hidden');
 }
blankBuild();
//Still doesn't work properly in Internet Explorer and possibly firefox.
//I would like to make a carousel for the boards, so when you click easy you can click the left or right of the board and it will give you new Easy boards, for example
