import products from '../data.js';

const mainController = {
  home: function(req, res) {
  // home(req, res) { // notation raccourcie: le :function est optionnel
    res.render('list', { 
      products, // products: products en abrégé
      title: 'Au Chouette Maraîcher',
    }); 
  },
  
  about: function(req, res) {
    res.render('about');
  },
}

export default mainController;