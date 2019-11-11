#!/bin/bash

sudo apt-get update
sudo apt-get install nodejs-legacy -y
sudo apt-get install npm  -y
sudo apt-get install nginx -y

sudo rm -rf /var/www/app
