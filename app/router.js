import express from 'express';

const router = express.Router();



router.get('/', function(req, res, next) {
  console.log(`test`)
    res.render('list',{
      seoTitle: `Au Chouette Maraîcher`,
    });
  });

router.get('/about', function(req, res) {
    console.log(`test`)
      res.render('about',{
      seoTitle: 'A propos',
      });
    });




  export default router; 