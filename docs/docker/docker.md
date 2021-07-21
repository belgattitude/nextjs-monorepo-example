# Docker

## Requirements

To enable [buildkit](https://docs.docker.com/develop/develop-images/build_enhancements/) features, please be sure to have a recent docker version.

- [x] docker-engine > 20.10.0
- [x] docker-compose > 1.29.0

> For installation refer to https://docs.docker.com/get-docker/

## Commands

### Build

```bash
BUILTKIT_PROGRESS=plain DOCKER_BUILDKIT=1 docker-compose build --force-rm --progress=plain workspaces-full-install
BUILTKIT_PROGRESS=plain DOCKER_BUILDKIT=1 docker-compose build --force-rm --progress=plain builder
BUILTKIT_PROGRESS=plain DOCKER_BUILDKIT=1 docker-compose build --force-rm --progress=plain production
```

### Start

```bash
DOCKER_BUILDKIT=1 docker-compose up --build web-app-dev
```

### Debugging

```bash
# Rebuild the image
DOCKER_BUILDKIT=1 docker-compose build --force-rm web-app-dev
# Shell into the container
DOCKER_BUILDKIT=1 docker-compose run --rm web-app-dev sh
```
