#!/bin/sh
# This script helps to identify lock file problems after install
# and should be part of the CI flow just after yarn install
if [ $(git status --porcelain | wc -c) -gt 0 ];
then
    echo "\nERR: The git repository state changed after the build, this should not happen.\n"
    git status
    echo "\nHINT: Did you update and commit your 'yarn.lock' ?"
    echo "\n      You can also check your '.gitgnore'."
    exit 1
fi
