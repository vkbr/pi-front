#!/bin/bash

cd ../server &&
echo "In directory $PWD"

yarn start &

echo $! > pid

sleep 3;

if [[ `uname` == "Linux" ]]; then
	nohup chromium-browser --start-fullscreen --app=http://localhost:3444 & disown;
fi

exit 0;