import Category from "./models/Category.js";
import Product from "./models/Product.js";

export const categories = [
  new Category('Légumes'),
  new Category('Fruits'),
  new Category('Champignons'),
];

// Créer une classe pour construire les produits
export default [
  new Product('Abricots', 'Nos abricots sont ceuillis à la main et très savoureux.', 4, 'fruits'),
  new Product('Clémentines', 'Récoltées bien mûres.', 5, 'fruits'),
  new Product('Fraises', 'Parfaites avec de la glace à la vanille.', 3, 'fruits'),
  new Product('Framboises', 'Excellentes en tarte.', 2, 'fruits'),
  new Product('Mangues', 'Une touche d\'exotisme.', 4, 'fruits'),
  new Product('Myrtilles', 'Elues myrtilles de l\'année.', 5, 'fruits'),
  new Product('Poires', 'A déguster sans modération.', 3, 'fruits'),
  new Product('Pommes', 'Parfaites en compote.', 4, 'fruits'),
  new Product('Asperges', 'Excellentes avec une touche de mayonnaise.', 3, 'legumes'),
  new Product('Aubergines', 'Elles raviront vos gratins.', 3, 'legumes'),
  new Product('Carottes', 'Se dégustent rapées ou entières.', 4, 'legumes'),
  new Product('Citrouilles', 'En soupe ou pour Halloween.', 5, 'legumes'),
  new Product('Patates', 'En raclette, en purée, en gratin, on a le choix.', 5, 'legumes'),
  new Product('Petits pois', 'Seuls ou avec des carottes.', 4, 'legumes'),
  new Product('Poivrons', 'Vert, jaune ou rouge, au choix.', 3, 'legumes'),
  new Product('Radis', 'Parfait avec du sel.', 4, 'legumes'),
];