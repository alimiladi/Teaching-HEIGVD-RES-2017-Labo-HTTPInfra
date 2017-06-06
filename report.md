# Laboratoire HTTP Infrasctructure

### Première étape : Serveur apache httpd dockerisé servant du contenu statique

Pour la réalisation de cette étape, nous avons suivi le webcast fourni par le professeur sur le repo [Github](https://github.com/SoftEng-HEIGVD/Teaching-HEIGVD-RES-2017-Labo-HTTPInfra) du laboratoire. 

Nous avons tout d'abord trouvé une image docker d'un serveur apache servant du contenu statique sur le site de [dockerhub](https://hub.docker.com/) prête à l'emploi. Nous avons choisi, comme dans le webcast, l'image officielle de [php](https://hub.docker.com/_/php/). 

Le serveur `httpd apache` a été lancé dans un conteneur docker et la communication a été établie avec le navigateur web `Mizilla Firefox`.

La configuration du `Dockerfile` nécessaire pour la construction de l'image `docker` du serveur a utililsé le package `php:7.0-apache` de l'image officielle `php` invoquée ci-dessus. Il a été constaté très rapidement que le serveur `httpd apache` utililse les fichiers de configuration dans le conteneur depuis lequel il est lancé sous le répertoire `/var/www/html/`. C'est pour cette raison que la page `index.html` servie par ce dernier est copiée dans ce répertoire lors du `build` de l'image `docker` du serveur.

Un template gratuit a été téléchargé depuis [bootstrap](https://startbootstrap.com/template-categories/one-page/), retouché pour les besoins de ce laboratoire et a servi comme page de référence de cette partie. Ainsi, le code source de cette et ces ressources page ont été placés dans un dossier `content` lequel est copié dans `/var/www/html` comme expliqué précédemment. 


[![](https://github.com/alimiladi/Teaching-HEIGVD-RES-2017-Labo-HTTPInfra/blob/fb-apache-static/ressources/template.PNG)](https://github.com/alimiladi/Teaching-HEIGVD-RES-2017-Labo-HTTPInfra/blob/fb-apache-static/ressources/template.PNG)

### Deuxième étape : Application express.js dockérisée servant du contenu dynamique

Nous nous sommes appuiés sur le webcast fourni par le professeur afin de compléter cette partie. 

L'image `Docker` choisie pour cette section est celle de `node.js` trouvée sur [dockerhub](https://hub.docker.com/_/node/). Nous avons vu que la dernière version stable de `node.js` est la `6.10.3`, c'est pour cette raison que nous avons choisi cette dernière dans le `Dockerfile` de l'image `Docker` que nous avons construit.

L'application a été lancée dans un container `Docker` et les tests de communication ont été établis avec le navigateur `Mozilla Firefox`, `telnet` et `postman`.

A l'aide d'un `port-mapping` entre le port de l'application (3000) et celui utilisé dans le `deamon` `docker-machine`, nous avons facilement pu nous connecter au container depuis l'extérieur et voir qu'il fonctionnait bien.

L'application renvoie un tableau de longueur aléatoire contenant des noms de pays et cités aléatoires en réaction à la requête `GET` de la racine `/`.

Le module `chance.js` est utilisé pour la génération de contenu aléatoire. La longueur du tableau est aussi générée aléatoirement. Dans chaque entrée du tableau on a le nom d'un pays et le nom d'une ville aléatoires.

**Test sur localhost avec le navigateur**

[![](https://github.com/alimiladi/Teaching-HEIGVD-RES-2017-Labo-HTTPInfra/blob/fb-express-dynamic/ressources/express_app_localhost.PNG)](https://github.com/alimiladi/Teaching-HEIGVD-RES-2017-Labo-HTTPInfra/blob/fb-express-dynamic/ressources/express_app_localhost.PNG)

**Test sur localhost avec telnet**

[![](https://github.com/alimiladi/Teaching-HEIGVD-RES-2017-Labo-HTTPInfra/blob/fb-express-dynamic/ressources/express_app_localhost_telnet.PNG)](https://github.com/alimiladi/Teaching-HEIGVD-RES-2017-Labo-HTTPInfra/blob/fb-express-dynamic/ressources/express_app_localhost_telnet.PNG)

**Test sur le container docker avec le navigateur**

[![](https://github.com/alimiladi/Teaching-HEIGVD-RES-2017-Labo-HTTPInfra/blob/fb-express-dynamic/ressources/express_app_docker_browser.PNG)](https://github.com/alimiladi/Teaching-HEIGVD-RES-2017-Labo-HTTPInfra/blob/fb-express-dynamic/ressources/express_app_docker_browser.PNG)

**Test sur le container docker avec telnet**

[![](https://github.com/alimiladi/Teaching-HEIGVD-RES-2017-Labo-HTTPInfra/blob/fb-express-dynamic/ressources/express_app_docker_telnet.PNG)](https://github.com/alimiladi/Teaching-HEIGVD-RES-2017-Labo-HTTPInfra/blob/fb-express-dynamic/ressources/express_app_docker_telnet.PNG)

**Test sur le container docker avec postman**

[![](https://github.com/alimiladi/Teaching-HEIGVD-RES-2017-Labo-HTTPInfra/blob/fb-express-dynamic/ressources/express_app_docker_postman.PNG)](https://github.com/alimiladi/Teaching-HEIGVD-RES-2017-Labo-HTTPInfra/blob/fb-express-dynamic/ressources/express_app_docker_postman.PNG)