#!/bin/sh
git checkout master
git branch -D onlineVersion
git checkout -b onlineVersion
rm -rf node_modules .vscode
rm styles.scss .gitignore package.json package-lock.json js/tests.js css/paleta-colores.css.map css/styles.css.map
echo "Don't forget to change local links to CDN links"
#git add .
#git commit -m "adds the onlineVersion branch to set the GitHub page of this practice"