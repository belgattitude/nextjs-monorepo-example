#!/bin/bash
YARN_COMPRESSION_LEVEL=mixed YARN_LOCKFILE_FILENAME=yarn.mixed-compress.lock yarn install
YARN_COMPRESSION_LEVEL=mixed YARN_LOCKFILE_FILENAME=yarn.mixed-compress.lock yarn dedupe

YARN_COMPRESSION_LEVEL=0 YARN_LOCKFILE_FILENAME=yarn.no-compress.lock yarn install
YARN_COMPRESSION_LEVEL=0 YARN_LOCKFILE_FILENAME=yarn.no-compress.lock yarn dedupe

YARN_NODE_LINKER=pnp YARN_COMPRESSION_LEVEL=0 YARN_LOCKFILE_FILENAME=yarn.pnp.lock yarn install
YARN_NODE_LINKER=pnp YARN_COMPRESSION_LEVEL=0 YARN_LOCKFILE_FILENAME=yarn.pnp.lock yarn dedupe

rm ./pnpm-lock.yaml

pnpm i
