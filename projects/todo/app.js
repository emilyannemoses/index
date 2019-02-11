// var form = document.querySelector("#new-item-form");
var $form = $("#new-item-form");
// var button = document.querySelector(".button");
var $button = $(".button");
// var ul = document.querySelector("#todo-list");
var $ul = $("#todo-list");
// var itemInput = document.querySelector("#new-item-input");
var $itemInput = $("#new-item-input");

function formSubmitted(event) {
  event.preventDefault();
  // var items = itemInput.value.split(",");
  var items = $itemInput.val().split(",");
  items.forEach(addlistItem);
  $form[0].reset();
  $ul.innerHTML = localStorage.getItem("listHTML");
}

function addlistItem(item){
  // var li =  document.createElement("li");
  var $li = $("<li>");
  // var label = document.createElement("label");
  var $label = $("<label>");
  // var input = document.createElement("input");
  var $input = $("<input>");
  // var span = document.createElement("span");
  var $span = $("<span>");
  $ul.append($li);
  $li.append($label);
  $label.append($input);
  $label.append($span);

  $span.text(item).appendTo($label);
  $input.attr("type", "checkbox");
}
$form.on("submit", formSubmitted);
localStorage.setItem("listHTML", $ul.innerHTML);

//WHEN the page loads
  //look in localStorage to see if the HTML for the list is there
  //if the HTML is there
  //set the HTML of the list to the HTML in localStorage
  //el.innerHTML = ...

//WHEN the user adds an item
  //do all the normal stuff
  //once the item is added to the list-style
  //save the HTML of the list to local storage
  //localStorage.setItem("...", el.innerHTML)