#!/bin/sh
# Workaround for cache on vercel
# @link https://github.com/yarnpkg/berry/issues/2900

set -e

BASEDIR=$(dirname $(dirname $(realpath "$0")))
CACHE_PATH="${BASEDIR}/node_modules/.yarn/cache"

cd "$BASEDIR"
ls -la $CACHE_PATH
#echo $CACHE_PATH;
#exit 1;

if [ -d "$CACHE_PATH" ]; then
  echo "Install with cache in ${CACHE_PATH}"
  YARN_CACHE_FOLDER="$CACHE_PATH" yarn install;
else
  echo "Install and populate cache in ${CACHE_PATH}"
  yarn install
  YARN_CACHE_FOLDER="$CACHE_PATH" yarn install;
fi