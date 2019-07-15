#!/bin/bash

set -e

kill $(cat ../server/pid) || true

cd $(dirname ${BASH_SOURCE[0]})

cd ../web
yarn
yarn build

cd ../server
yarn

bash ../scripts/run.sh
