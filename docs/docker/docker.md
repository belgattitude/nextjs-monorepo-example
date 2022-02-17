# Docker

## Introduction

A docker example with a multi-stage approach to minimize image size
and build time (taking advantage of buildx cache).

```
.
├── apps
│   ├── blog-app
│   └── web-app
├── packages
│   ├── core-lib
│   ├── db-main-prisma
│   └── ui-lib
├── static
│   ├── assets
│   └── locales
├── .dockerignore
├── docker-compose.web-app.yml  (specific for web-app)
├── docker-compose.yml          (general services like postgresql...)
└── Dockerfile                  (multistage build for web-app)
```

## Requirements

- [x] [docker-engine](https://docs.docker.com/get-docker) >= 20.10.0
- [x] docker-compose >= 1.29.0
- [x] docker [buildkit](https://docs.docker.com/develop/develop-images/build_enhancements) enabled.
- [x] optional: [lazydocker](https://github.com/jesseduffield/lazydocker), a beautiful tui.
- [x] optional: [dive](https://github.com/wagoodman/dive) to debug layer sizes.

> Note: Be sure to create a [.dockerignore containing at least those entries](https://github.com/belgattitude/nextjs-monorepo-example/blob/main/.dockerignore).

## Ready made commands

| Yarn script                   | Description                                  |
| ----------------------------- | -------------------------------------------- |
| `yarn docker:web-app:develop` | Run apps/web-app in development mode         |
| `yarn docker:web-app:install` | Install dependencies in cache mount          |
| `yarn docker:web-app:build`   | Create a production build                    |
| `yarn docker:web-app:serve`   | Serve production build on localhost:3000,    |
| `yarn docker:prune-cache`     | **Run this regularly if using in local !!!** |

> Build and serve commands requires to have a `./apps/web-app/.env.local` present.

## Develop

```bash
yarn docker:web-app:develop

# Or alternatively
DOCKER_BUILDKIT=1 docker-compose -f ./docker-compose.yml -f ./docker-compose.web-app.yml up develop main-db
```

<details>
  <summary>Want to open a shell to debug ?</summary>
    
  ```bash
  DOCKER_BUILDKIT=1 docker-compose -f ./docker-compose.web-app.yml run --rm develop sh
  ```
  
</details>

## Multistage in details

See the latest [./docker-compose.web-app.yml](https://github.com/belgattitude/nextjs-monorepo-example/blob/main/docker-compose.web-app.yml)
and [./Dockerfile](https://github.com/belgattitude/nextjs-monorepo-example/blob/main/docker-compose.web-app.yml).

PS: The goal of multistage is mainly to reduce the size of the resulting image, it also allows to skip deps stage (ie: install deps) when no changes are detected in your deps (lock file).

![Lazydocker multistage sizes](multistage-size.png)

### Stage 1: deps

This stage will install the monorepo and make all node_modules folders available in later
stages.

<details>
  <summary>Some commands</summary>
   
  To build it independently
    
  ```bash
  DOCKER_BUILDKIT=1 docker-compose -f docker-compose.web-app.yml build --progress=tty deps
  # docker buildx bake -f docker-compose.web-app.yml --progress=tty deps
  ```
    
  To force a rebuild
    
  ```bash
  DOCKER_BUILDKIT=1 docker-compose -f docker-compose.web-app.yml build --no-cache --force-rm --progress=tty deps
  ```
    
  Want to open a shell into it ?
    
  ```bash
  DOCKER_BUILDKIT=1 docker-compose -f docker-compose.web-app.yml run --rm deps sh
  ```

</details>

### Stage 2: builder

This stage will automatically run the deps stage and copy all installed node_modules folder.
Then build the thing and remove devDependencies.

> PS: You'll have to send some build-args (env variables) in order to have a real build.

<details>
  <summary>Some commands</summary>
  To build it independently
  
  ```bash
  DOCKER_BUILDKIT=1 docker-compose -f docker-compose.web-app.yml build --progress=tty builder
  # docker buildx bake -f docker-compose.web-app.yml --progress=tty builder
  ```
  
  To force a rebuild
  
  ```bash
  DOCKER_BUILDKIT=1 docker-compose -f docker-compose.web-app.yml build --no-cache --force-rm --progress=tty builder
  ```
  
  Want to open a shell into it ?
  
  ```bash
  DOCKER_BUILDKIT=1 docker-compose -f docker-compose.web-app.yml run --rm builder sh
  ```

</details>

### Stage 3: runner

Launch a production build and listen by default to http://localhost:3000.

```bash
DOCKER_BUILDKIT=1 docker-compose -f docker-compose.web-app.yml --env-file .env.secret up runner
```

> PS: you'll have to provide your own .env with required runtime variables.

<details>
  <summary>Some commands</summary>
  To build it independently
  
  ```bash
  DOCKER_BUILDKIT=1 docker-compose -f docker-compose.web-app.yml build --progress=tty runner
  # docker buildx bake -f docker-compose.web-app.yml --progress=tty runner
  ```
  
  To force a rebuild
  
  ```bash
  DOCKER_BUILDKIT=1 docker-compose -f docker-compose.web-app.yml build --no-cache --force-rm --progress=tty runner
  ```
  
  Want to open a shell into it ?
  
  ```bash
  DOCKER_BUILDKIT=1 docker-compose -f docker-compose.web-app.yml run --rm runner sh
  ```
  
</details>

## Remove docker

### Cleanup

| Option                  | Command                                              |
| ----------------------- | ---------------------------------------------------- |
| Prune buildx            | `docker buildx prune`                                |
| Prune cachemount caches | `docker builder prune --filter type=exec.cachemount` |
| Remove all containers   | `docker container rm -f $(docker container ls -qa)`  |
| Clean all images        | `docker image rm -f $(docker image ls -q)`           |
| Remove all volumes      | `docker volume rm $(docker volume ls -q)`            |

### Complete removal

Like to remove all docker layers, overlays... **Warning** you'll lose all your data.

```bash
systemctl docker stop
rm -rd /var/lib/docker
systemctl docker start
```
