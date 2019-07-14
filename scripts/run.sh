cd ../server

yarn start &

ehco $1 > pid

chromium-browser --start-fullscreen --app=http://localhost:3444