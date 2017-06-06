#Laboratoire HTTP Infrasctructure

###Première étape : Serveur apache httpd dockerisé servant du contenu statique

Pour la réalisation de cette étape, nous avons suivi le webcast fourni par le professeur sur le repo [Github](https://github.com/SoftEng-HEIGVD/Teaching-HEIGVD-RES-2017-Labo-HTTPInfra) du laboratoire. 

Nous avons tout d'abord trouvé une image docker d'un serveur apache servant du contenu statique sur le site de [dockerhub](https://hub.docker.com/) prête à l'emploi. Nous avons choisi, comme dans le webcast, l'image officielle de [php](https://hub.docker.com/_/php/). 

Le serveur `httpd apache` a été lancé dans un conteneur docker et la communication a été établie avec le navigateur web `Mizilla Firefox`.

La configuration du `Dockerfile` nécessaire pour la construction de l'image `docker` du serveur a utililsé le package `php:7.0-apache` de l'image officielle `php` invoquée ci-dessus. Il a été constaté très rapidement que le serveur `httpd apache` utililse les fichiers de configuration dans le conteneur depuis lequel il est lancé sous le répertoire `/var/www/html/`. C'est pour cette raison que la page `index.html` servie par ce dernier est copiée dans ce répertoire lors du `build` de l'image `docker` du serveur.

Un template gratuit a été téléchargé depuis [bootstrap](https://startbootstrap.com/template-categories/one-page/), retouché pour les besoins de ce laboratoire et a servi comme page de référence de cette partie. Ainsi, le code source de cette et ces ressources page ont été placés dans un dossier `content` lequel est copié dans `/var/www/html` comme expliqué précédemment. 


[![](https://github.com/alimiladi/Teaching-HEIGVD-RES-2017-Labo-HTTPInfra/blob/fb-apache-static/ressources/template.PNG)](https://github.com/alimiladi/Teaching-HEIGVD-RES-2017-Labo-HTTPInfra/blob/fb-apache-static/ressources/template.PNG)

