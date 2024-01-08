# Boilerplate application examen web3

## Base de données

L'API à besoin d'une base de données contenant 2 collections : `children` et `events`.
Pour cela, utilisez MongoBD Atlas.
Un fichier db.json est disponible avec des données de test.

## Front/Back

Un fichier README.md est disponible dans chaque projet. Lisez-le attentivement avant de commencer.

lien mangodb:https://cloud.mongodb.com/v2/6357d226add1b77293c6d942#/clusters

npm a faire sur (backend)l'api pour installer :
avoir extension  REST client
1)npm install express
2)npm update
(npm install --save-dev nodemon)
3)npm install mongoose
(npm install dotenv-flow )

npm a faire sur front(webapp) pour installer :
1)npm install
2)npm instal axios
3)npm update
4)npm instal react-router
(npm install --save postcss-safe-parser erreur instalation)
(export NODE_OPTIONS=--openssl-legacy-provider pour résoudre le prob)
(npm instal react-router)


a mettre dans le .env
MONGODB_URI =mongodb+srv://ipl:ipl@cluster0.tcgp8lt.mongodb.net/test?retryWrites=true&w=majority

PORT = 3001
