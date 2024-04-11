// Create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
var comments = require('./comments.json');
var path = require('path');
var _ = require('underscore');

// Set port
app.set('port', (process.env.PORT || 3000));

// Set public folder
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Get comments
app.get('/api/comments', function(req, res) {
    res.json(comments);
});

// Add comment
app.post('/api/comments', function(req, res) {
    var newComment = {
        id: Date.now()
    };
});
