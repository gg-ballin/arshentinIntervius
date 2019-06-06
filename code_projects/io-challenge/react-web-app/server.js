var express = require('express');
var path = require('path');

const app = express();

const PORT = process.env.PORT || 4000

app.use(express.static(__dirname + '/build'))

app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'build', 'index.html')))

app.listen(PORT, ()=> {
  console.log('====================================')
  console.log(`App it's running on PORT: ${ PORT } `)
  console.log('====================================')
})