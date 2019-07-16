#!/bin/bash

set -x

kill $(cat ../server/pid) || true

cd $(dirname ${BASH_SOURCE[0]})

cd ../web
npm ci;
npm run build;

cd ../server
npm ci;

bash ../scripts/run.sh
