#!/bin/bash

set -x

kill $(cat ../server/pid) || true

cd $(dirname ${BASH_SOURCE[0]})

cd ../web
yarn install --pure-lockfile --frozen-lockfile;
yarn build --pure-lockfile --frozen-lockfile;

cd ../server
yarn install --pure-lockfile --frozen-lockfile;

bash ../scripts/run.sh
