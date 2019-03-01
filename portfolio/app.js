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
  
// EXAMPLE 👇
var _example_url = 'https://cpv2api.com/pens/public/emilyannemoses/?page=1'

_GET(_example_url, (data)=>{
    console.log(data.data[0].title);
    data.data.map(pen => {
        codepen.innerHTML += `
            <div class="pen">
            <br>
            ${pen.title}
            <br><br>
            <iframe height="500px" style="width: 100vw;" scrolling="no" title="${pen.title}" src="//codepen.io/emilyannemoses/embed/${pen.id}/?height=265&theme-id=0&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
                See the Pen <a href='https://codepen.io/emilyannemoses/pen/${pen.id}/'>${pen.title}</a> by Emily Anne Moses
                (<a href='https://codepen.io/emilyannemoses'>@emilyannemoses</a>) on <a href='https://codepen.io'>CodePen</a>.
            </iframe>
            </div>
        `
    })
});

// `
// <p class="codepen" data-height="367" data-theme-id="0" data-default-tab="html,result" data-user="emilyannemoses" data-slug-hash="QoyGZo" style="height: 367px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="${pen.title}">
//   <span>See the Pen <a href="https://codepen.io/emilyannemoses/pen/${pen.id}/">
//   ${pen.title}</a> by Emily Anne Moses (<a href="https://codepen.io/emilyannemoses">@emilyannemoses</a>)
//   on <a href="https://codepen.io">CodePen</a>.</span>
// </p>
// <script async src="https://static.codepen.io/assets/embed/ei.js"></script>
// `

// <div class="pen">
// <br>
// ${pen.title}
// <br><br>
// <iframe height="500px" style="width: 100vw;" scrolling="no" title="${pen.title}" src="//codepen.io/emilyannemoses/embed/${pen.id}/?height=265&theme-id=0&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
//     See the Pen <a href='https://codepen.io/emilyannemoses/pen/${pen.id}/'>${pen.title}</a> by Emily Anne Moses
//     (<a href='https://codepen.io/emilyannemoses'>@emilyannemoses</a>) on <a href='https://codepen.io'>CodePen</a>.
// </iframe>
// </div>