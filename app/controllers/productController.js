import products, { categories } from '../data.js';

// Mission: détenir le code qui permet de préparer une réponse pour 
//les requêtes liées aux pages produits
const productController = {

  detail: function (req, res, next) {
    const askedSlug = req.params.slug;
    const product = products.find(element => element.slug === askedSlug);
    if (product) {
      res.render('product', { product });
    }
    else {
      next();
    }
  },

  category: function(req, res, next) {
    const askedName = req.params.name;
    const category = categories.find(element => element.slug === askedName);
    if (category) {
      const filteredProduct = products.filter(element => element.category === askedName);
      res.render('list', { 
        products: filteredProduct,
        title: category.title, 
      });
    }
    else {
      next();
    }
  },

  best: function(req, res) {
    const result = products.filter(product => product.grade === 5);
    res.render('list', {
      title: 'Produits les mieux notés',
      products: result,
    });
  },

  allCategories: function(req, res) {
    res.render('simple-list', {
      title: 'Nos rayons',
      segmentTitle: 'Choisissez votre rayon',
      categories: categories,
    });
  },

};

export default productController;