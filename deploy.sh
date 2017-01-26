PROJECT_DIR=${PWD}
echo "Project dir $PROJECT_DIR"
ng build prod -aot --base-href /workouttimer/

rm -rf /tmp/deployGH
mkdir /tmp/deployGH
cd /tmp/deployGH
git clone git@github.com:jcplessis/workouttimer.git
cd workouttimer
git checkout gh-pages
rm -rf *
cp -r $PROJECT_DIR/dist/* .
git add -A
git commit -a -m "auto deploy `date`"
git push
cd $PROJECT_DIR






