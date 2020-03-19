const express = require('express');
const app = express();
const path = require('path');

//app.use(express.static(__dirname + '/dist/bibli-search-frontend'));
if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
}
app.listen(process.env.PORT || 8080);
app.get('*', (request, response) => {
	response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});
/*
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/bibli-search-frontend/index.html'));
})
*/
console.log('Console listening');