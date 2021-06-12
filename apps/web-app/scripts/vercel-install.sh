#!/bin/sh
# Workaround for cache on vercel
# @link https://github.com/yarnpkg/berry/issues/2900

set -e

BASEDIR=$(dirname $(dirname $(realpath "$0")))
#CACHE_PATH="${BASEDIR}/node_modules/.yarn/cache"
CACHE_PATH="${BASEDIR}/.next/cache/yarn-cache"

cd "$BASEDIR"

YARN_CACHE_FOLDER="$CACHE_PATH" yarn install

#if [ -d "$CACHE_PATH" ]; then
#  echo "Install with cache in ${CACHE_PATH}"
#  YARN_CACHE_FOLDER="$CACHE_PATH" yarn install;
#else
#  echo "Install and populate cache in ${CACHE_PATH}"
#  yarn install
#  YARN_CACHE_FOLDER="$CACHE_PATH" yarn install;
#fi