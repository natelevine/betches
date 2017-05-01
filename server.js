var express = require('express');

var app = express();

app.set('port', process.env.PORT || 9999);
app.use(express.static('.'));

app.listen(app.get('port'));
