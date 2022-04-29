#!/bin/sh

echo 'Building...'
npm run build

echo 'Publishing...'
rm -rf ./docs/*
mv ./public/* ./docs/
echo 'svfreedomstar.com' > ./docs/CNAME
echo 'Complete!'
