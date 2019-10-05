var express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/my-app'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/my-app/index.html'));
});

app.listen(3000 || process.env.PORT); 