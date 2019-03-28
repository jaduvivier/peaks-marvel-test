1. Description 
––––––––––––––
L'application « Test Marvel » est développée en JavaScript et exécutée côté serveur sous environnement Node.js.
Elle est hébergée sur la plateforme Firebase (Hosting) et exécutée par Firebase Cloud Fonctions.
Le routage est mis en œuvre avec le framework Express.js.
La communication avec l'API Marvel est effectuée grâce aux module request et request-promise (asynchronicité des requêtes).
La mise en page de l'application s'appuie sur le framework d'interface Bootstrap 4 (HTML5/CSS3) et les données insérées grâce au module Twig.js.
Les tests unitaires sont effectués grâce au framework Mocha associé à la librairie Chai.

2. Exécution
––––––––––––
L'application est accessible en ligne à l'adresse https://peaks-marvel-duvivier.firebaseapp.com

    2.1. Affichage d'une liste de vingt personnages
    -----------------------------------------------
La page d'accueil affiche vingt personnages Marvel à partir du centième listé par l'API donnée (la requête demande donc d'ignorer les 99 premiers — offset=99 — puis de limiter à 20 documents la réponse envoyée — limit=20).

    2.2. Affichage des détails d'un personnage
    ------------------------------------------
Au clic sur le nom d'un personnage, une nouvelle page s'ouvre pour afficher les détails de celui-ci (nom, image, description, nombre d'apparitions, trois premiers comics où il apparaît).

3. Architecture
–––––––––––––––
L'architecture générale du projet est imposée par le framework Firebase :
• Le dossier public est rattaché à son hébergement (Firebase Hosting) et au stockage des données statiques (scripts clients, styles, assets…)
• Le dossier functions est destiné à en accueillir les scripts serveurs (Firebase Cloud Functions) et les templates d'affichage

À l'intérieur du dossier functions, le fichier  index.js  est le point d'entrée de l'application, dont il assure le routage.
L'affichage des pages demandées est assuré par les fonctions du fichier  character-controller.js  qui rassemble les données nécessaires et les transmets au template Twig approprié.
Les données sont récupérées par les fonctions du fichier  character-service.js  qui effectuent les requêtes à l'API Marvel et assure le traitement des données reçues.