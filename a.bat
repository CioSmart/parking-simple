cd C:\Proiecte\aplicatie parcare\parking-simple
rm -rf .git
git init
git add .
git commit -m "init: fork from parking-app"
# creezi repo pe GitHub: parking-simple
git remote add origin https://github.com/CioSmart/parking-simple.git
git push -u origin main