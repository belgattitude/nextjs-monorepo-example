## Docker

### Requirements

- [x] [docker-engine](https://docs.docker.com/get-docker) >= 23 and [buildkit](https://docs.docker.com/build/buildkit/).
- [x] docker compose v2: [repo](https://github.com/docker/compose) - [docs](https://docs.docker.com/compose/)
- [x] optional: [lazydocker](https://github.com/jesseduffield/lazydocker), a beautiful tui.
- [x] optional: [dive](https://github.com/wagoodman/dive) to debug layer sizes.

### Quick run

```bash
cd ./docker
docker compose build
docker compose build --progress=plain # More verbose
docker compose build --parallel       # Might be faster
docker compose up
docker compose down
```

### Cheat sheet

```bash
export IMAGE=nextjs-monorepo-example-nextjs-app

# Inspect the image
docker image inspect ${IMAGE}

# Save te image (gzip)
docker save ${IMAGE}  | gip  > /tmp/${IMAGE}-app.tar.gz
# +/- 70M  ${IMAGE}.tar.gz (slower)

docker save ${IMAGE}  | zstd | pv > /tmp/${IMAGE}.tar.zst
# +/- 60M Jul 20 10:54 ${IMAGE}.tar.zst (faster)

# if not using k8s/registry, you can load and run from a remote machine.
docker load -i /tmp/${IMAGE}.tar.zst

# Run the image
docker run ${IMAGE}
```
