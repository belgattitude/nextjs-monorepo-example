## Docker

### Requirements

Recent docker / buildx for --link support.

### Run the nextjs-app

```bash
docker compose build
docker compose up
docker compose down
```

### Debug

```bash
docker image inspect nextjs-monorepo-example-nextjs-app
docker save nextjs-monorepo-example-nextjs-app | gzip > /tmp/nextjs-app.tar.gz
# for example: 66M xx nextjs-app.tar.gz
```
