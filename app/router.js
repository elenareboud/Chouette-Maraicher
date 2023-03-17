import express from 'express';

const router = express.Router();



router.get('/', function(req, res) {
  console.log(`test`)
    res.render('about');
  });






  export default router; 