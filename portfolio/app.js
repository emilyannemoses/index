_GET = (url, callback)=>{
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4) {
        if (callback) callback(JSON.parse(xhr.responseText))
      }
    }
    xhr.send(null)
  }
  
var _example_url = 'https://cpv2api.com/pens/public/emilyannemoses/?page=1'

_GET(_example_url, (data)=>{
    data.data.map(pen => {
      setTimeout(function(){ 
        codepen.innerHTML += `
            <div class="pen">
            <br>
            ${pen.title}
            <br><br>
            <iframe height="500px" style="width: 100vw;" scrolling="no" title="${pen.title}" src="//codepen.io/emilyannemoses/embed/${pen.id}/?height=265&theme-id=0&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
                See the Pen <a href='https://codepen.io/emilyannemoses/pen/${pen.id}/'>${pen.title}</a> by Emily Anne Moses
                (<a href='https://codepen.io/emilyannemoses'>@emilyannemoses</a>) on <a href='https://codepen.io'>CodePen</a>.
            </iframe>
            </div>
        `
      }, 100)
    })
});