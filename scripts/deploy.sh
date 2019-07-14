#!/bin/bash

kill $(cat ../server/pid)

cd ../web
yarn
yarn build

cd ../server
yarn

bash ../scripts/run.sh
