#!/bin/bash

cd ../server

yarn start &

ehco $! > pid

sleep 3;

if [[ "$OSTYPE" == "linux-gnu"* ]]; then
	chromium-browser --start-fullscreen --app=http://localhost:3444 &
else
