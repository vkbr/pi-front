#!/bin/bash

kill $(cat ../server/pid)

cd ../web
yarn
yarn build

cd ../server
yarn
yarn start &

ehco $1 > pid

chromium-browser --start-fullscreen --app=http://localhost:3444
