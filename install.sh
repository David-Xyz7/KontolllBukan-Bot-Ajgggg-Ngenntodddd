#!/usr/bin/bash

apt-get update
apt-get upgrade
npm i nodejs libwebp ffmpeg wget tesseract
npm i lolis.life
npm i awesome-phonenumber
npm i cfonts
npm i spinnies
npm i brainly-scraper
npm i remove.bg
npm i image-to-base64
npm i base64-img
npm i imgbb-uploader
wget -O ~/../usr/share/tessdata/ind.traineddata "https://github.com/tesseract-ocr/tessdata/blob/master/ind.traineddata?raw=true"
npm install

echo "[*] All dependencies have been installed, please run the command \"npm start\" to immediately start the script"
