// Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const _ = require('lodash');
const uuidv4 = require('uuid/v4');
const PORT = 3000;

app.use(bodyParser.json());

const COMMENTS_FILE = path.join(__dirname, 'comments.json');

// Get comments
app.get('/api/comments', (req, res) => {
  fs.readFile(COMMENTS_FILE, (err, data) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }

    res.json(JSON.parse(data));
  });
});

// Add comment
app.post('/api/comments', (req, res) => {
  fs.readFile(COMMENTS_FILE, (err, data) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }

    const comments = JSON.parse(data);
    const newComment = {
      id: uuidv4(),

