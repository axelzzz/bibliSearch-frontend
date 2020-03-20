const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/dist'));

app.get('/*', (req, res) => {
	res.sendFile(path.join(__dirname+'/dist/index.html'));
});
/*
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/bibli-search-frontend/index.html'));
})
*/
app.listen(process.env.PORT || 8080);