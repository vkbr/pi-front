#!/bin/bash

set -x

kill $(cat ../server/pid) || true &&

cd $(dirname ${BASH_SOURCE[0]}) &&
echo "In directory $PWD"

cd ../web
echo "In directory $PWD"
yarn 
yarn build

cd ../server &&
echo "In directory $PWD"
yarn

bash ../scripts/run.sh
