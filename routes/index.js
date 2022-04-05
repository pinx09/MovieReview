var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/submit', function(req, res, next) {
  var movies = req.body.movies;
  console.log(movies);
  if (movies == "encanto") {
    res.render("encanto");
  }
  else if (movies == "moana") {
    res.render("moana");
  }
  else if (movies == "tangled") {
    res.render("tangled");
  }
  else if (movies == "coco") {
    res.render("coco");
  }
  else {
    res.render("tinkerbell");
  }
});

module.exports = router;
