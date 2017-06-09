FROM php:7.0-apache

RUN apt-get -y update

RUN apt-get -y install vim

COPY conf/ /etc/apache2

RUN a2enmod proxy proxy_http

RUN a2ensite 000-* 001-*
