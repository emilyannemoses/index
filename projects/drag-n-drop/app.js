var allPictures = {
    "pic1" : "images/1.png",
    "pic2" : "images/2.png",
    "pic3" : "images/3.png",
    "pic4" : "images/4.png",
    "pic5" : "images/5.png",
    "pic6" : "images/6.png",
    "pic7" : "images/7.png",
    "pic8" : "images/8.png",
    "pic9" : "images/9.png",
    "pic10" : "images/10.png",
    "pic11" : "images/11.png",
    "pic12" : "images/12.png"
  };
  Object.keys(allPictures).forEach(function(key){
    var imgTag = document.createElement('img');
    imgTag.className = 'myPictures';
    var values = allPictures[key];
    imgTag.setAttribute("src",values);
    document.body.appendChild(imgTag);
  });
  
  var id = 'pictures-full';
  var images = document.querySelectorAll('.myPictures');
  var dragSrcEl_ = null;
  this.handleDragStart = function (e) {
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
    dragSrcEl_ = this;
    this.classList.add('moving');
  };
  this.handleDragOver = function (e) {
    if (e.preventDefault) {
      e.preventDefault();
    }
    e.dataTransfer.dropEffect = 'move';
    return false;
  };
  this.handleDrop = function (e) {
    if (e.stopPropagation) {
      e.stopPropagation();
    }
    if(dragSrcEl_ != this){
      var colorHolder = dragSrcEl_.src;
      dragSrcEl_.src = this.src;
      this.src = colorHolder;
    }
    return false;
  };
  [].forEach.call(images, function (imageBox) {
    imageBox.setAttribute('draggable', 'true');
    imageBox.addEventListener('dragstart', this.handleDragStart, false);
    imageBox.addEventListener('dragover', this.handleDragOver, false);
    imageBox.addEventListener('drop', this.handleDrop, false);
  });
  