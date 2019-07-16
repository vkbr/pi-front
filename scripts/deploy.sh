#!/bin/bash

set -x

kill $(cat ../server/pid) || true

cd $(dirname ${BASH_SOURCE[0]})

cd ../web
yarn install;
yarn build;

cd ../server
yarn install;

bash ../scripts/run.sh
