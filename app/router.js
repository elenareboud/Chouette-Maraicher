import express from 'express';
import products from './data.js';

const router = express.Router();



router.get('/', function(req, res) {
      res.render('list',{
      seoTitle: `Au Chouette Maraîcher`,
      
    });  
    
  });

router.get('/about', function(req, res) {
  
      res.render('about',{
      seoTitle: 'A propos',
      });
    });

router.get('/:slug', function(req, res, next) {
  const slug = req.params.slug;
  console.log(slug);
  const product = products.find(element => element.slug === slug);
  

    if(product){
    res.render('product',{
      seoTitle: `Au Chouette Maraîcher`,
      title: product.title,
      description: product.description,
      
    }); 
  } 
  else {
    next();
  }
  });



  export default router; 