import express from 'express';

const router = express.Router();



router.get('/', function(req, res) {
  console.log(`test`)
    res.render('about',{
      title: 'A propos',
    });
  });






  export default router; 