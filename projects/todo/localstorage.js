//WHEN page loads
  //check to see if anything is in local storage and parse it FROM JSON format tomake it into an araray
  var items = JSON.parse(localStorage.getItem("items"));

  //IF items is not null, if there is stuff in local storage
    //THEN 
    items.forEach(displayItems);

  //WHEN the user submits a new item to the todo list
    //take the value of the input and create a new item OBJECT
    var item = {name: input.value}
    // display the item 
    displayItem(item);
    var items = JSON.parse(localStorage.getItem("items"));
    if (items == null){
    items = []
    }
    items.push(item);
    localStorage.setItem("items" , JSON.stringify(items))