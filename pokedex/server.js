const express    = require('express');
const methodOverride = require('method-override')
const app        = express();
const pokemon    = require('./models/pokemon.js');

app.use( express.urlencoded( { extended:false } ) );
app.use( express.static('public'))
app.use(methodOverride('_method'))


// INDEX
app.get('/Pokemon', (req, res) => {
res.render('index.ejs', { data: pokemon });
});

app.delete('/Pokemon/:id', (req, res) => {
  data.splice(req.params.id, 1)
  res.redirect('/Pokemon')
})

app.get('/Pokemon/:id/edit', (req, res) => {
    res.render(
      'edit.ejs',
    {
      data:pokemon[req.params.data],
      index: req.params.data
    })
  })

  app.post('/Pokemon', (req, res) => {
    data.push(req.body);
    res.redirect('/Pokemon');
});



// SHOW
app.get('/Pokemon/:id', (req, res) => {
res.render('show.ejs', { data: pokemon[req.params.id] });
});

app.get('/Pokemon/new', (req, res) => {
    res.render('new.ejs');
});


app.listen(3000, () => {
  console.log('listening...');
})


// getting this error on my new route but it's referring to the show page as an error. I asked Aegean what it was and she couldn't figure out what the error was or how it was effecting the server because the other routes run fine. After 5.5 hours I could get to the show page and back again but had trouble with the delete and edit routes. need help with this tomorrow.
//
//    <!-- TypeError: /Users/danieldella-rose/dev/SEIR-Moss/unit_2/w05d04/homework/pokedex/views/show.ejs:11
//    9|     <div class="container">
//    10|       <ul>
// >> 11|         <img src="<%=data.img%>">
//    12|         <li>Name:
//    13|           <%=data.name%>
//    14|         </li>
//
// Cannot read property 'img' of undefined
//    at eval (/Users/danieldella-rose/dev/SEIR-Moss/unit_2/w05d04/homework/pokedex/views/show.ejs:12:30)
//    at show (/Users/danieldella-rose/dev/SEIR-Moss/unit_2/w05d04/homework/pokedex/node_modules/ejs/lib/ejs.js:691:17)
//    at tryHandleCache (/Users/danieldella-rose/dev/SEIR-Moss/unit_2/w05d04/homework/pokedex/node_modules/ejs/lib/ejs.js:272:36)
//    at View.exports.renderFile [as engine] (/Users/danieldella-rose/dev/SEIR-Moss/unit_2/w05d04/homework/pokedex/node_modules/ejs/lib/ejs.js:489:10)
//    at View.render (/Users/danieldella-rose/dev/SEIR-Moss/unit_2/w05d04/homework/pokedex/node_modules/express/lib/view.js:135:8)
//    at tryRender (/Users/danieldella-rose/dev/SEIR-Moss/unit_2/w05d04/homework/pokedex/node_modules/express/lib/application.js:640:10)
//    at Function.render (/Users/danieldella-rose/dev/SEIR-Moss/unit_2/w05d04/homework/pokedex/node_modules/express/lib/application.js:592:3)
//    at ServerResponse.render (/Users/danieldella-rose/dev/SEIR-Moss/unit_2/w05d04/homework/pokedex/node_modules/express/lib/response.js:1012:7)
//    at /Users/danieldella-rose/dev/SEIR-Moss/unit_2/w05d04/homework/pokedex/server.js:39:5
//    at Layer.handle [as handle_request] (/Users/danieldella-rose/dev/SEIR-Moss/unit_2/w05d04/homework/pokedex/node_modules/express/lib/router/layer.js:95:5) -->
