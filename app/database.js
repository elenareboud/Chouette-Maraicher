// module pg qui dispose des outils pour se connecter
import pg from 'pg';
//module dotenv car mes informations de connexion sont dans un fichier .env
import * as dotenv from 'dotenv';

// config de dotenv en premier sans quoi pg ne saura pas à quelle bdd se connecter
dotenv.config();

// on crée un objet qui disposera de la méthode pour se connecter
const client = new pg.Client();
// qu'on execute pour se connecté à la bdd choisie dans notre .env
client.connect();

// on exporte l'objet connecté
export default client;