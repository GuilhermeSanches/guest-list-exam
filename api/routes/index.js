var express = require('express');
var app = express.Router();
var GUESTLIST = require('../guesstList/guestListDAO');

app.route('/api/guests')
    .get(GUESTLIST.read)
    .post(GUESTLIST.create);
    
app.route('/api/guests/:id')  
    .delete(GUESTLIST.delete);
  
module.exports = app;