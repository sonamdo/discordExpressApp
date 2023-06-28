import express from 'express';
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('this is the index')
  res.render('index', { title: 'Express' });
});

export const indexRouter = router;
