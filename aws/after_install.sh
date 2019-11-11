#!/bin/bash

mkdir /var/www/app

sudo ln -sf /var/www/app/aws/app.conf /etc/nginx/sites-enabled/default

cd /var/www/app
sudo npm install
sudo npm run build
