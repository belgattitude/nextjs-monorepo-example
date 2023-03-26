#!/bin/sh
# This script helps to identify unexpected changes during steps
if [ $(git status --porcelain | wc -c) -gt 0 ];
then
    printf "[Error]: The git repository state changed after the previous operation.\n"
    printf "         Here's the output of git status.\n\n"
    git status
    printf "\nHINT: Did you forget to run the codegen on changed packages ?\n"
    exit 1
fi
printf "[Success]: The git repository state haven't been changed after the previous operation.\n"
exit 0
