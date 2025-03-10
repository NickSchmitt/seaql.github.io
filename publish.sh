#!/bin/bash
set -e
cd SeaORM
npm run build
[[ -d ../docs/SeaORM ]] && rm -r ../docs/SeaORM
mv build ../docs/SeaORM
cd ..
git add docs
git commit -m 'Publish Docs'
git push --force origin master:gh-pages
git reset --hard HEAD~1