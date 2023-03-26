#!/bin/sh
# This script helps to identify unexpected changes during steps
if [ $(git status --porcelain | wc -c) -gt 0 ];
then
    echo "\nERR: The git repository state changed after the previous operation.\n"
    git status
    echo "\nHINT: Did you forget to run the codegen on changed packages ?"
    exit 1
fi
