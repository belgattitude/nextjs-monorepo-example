---
"nextjs-app": minor
---

Add flamegraph command to debug performance issue on homepage

```
npm i --global autocannon
cd ./apps/nextjs-app
yarn flamegraph-home
```

Example output:

```
┌─────────┬───────┬───────┬───────┬───────┬──────────┬───────────┬─────────┐
│ Stat    │ 2.5%  │ 50%   │ 97.5% │ 99%   │ Avg      │ Stdev     │ Max     │
├─────────┼───────┼───────┼───────┼───────┼──────────┼───────────┼─────────┤
│ Latency │ 11 ms │ 15 ms │ 46 ms │ 82 ms │ 35.46 ms │ 276.28 ms │ 4632 ms │
└─────────┴───────┴───────┴───────┴───────┴──────────┴───────────┴─────────┘
┌───────────┬─────┬──────┬─────┬─────────┬─────────┬────────┬─────────┐
│ Stat      │ 1%  │ 2.5% │ 50% │ 97.5%   │ Avg     │ Stdev  │ Min     │
├───────────┼─────┼──────┼─────┼─────────┼─────────┼────────┼─────────┤
│ Req/Sec   │ 0   │ 0    │ 0   │ 669     │ 139.06  │ 232.54 │ 148     │
├───────────┼─────┼──────┼─────┼─────────┼─────────┼────────┼─────────┤
│ Bytes/Sec │ 0 B │ 0 B  │ 0 B │ 14.1 MB │ 2.93 MB │ 4.9 MB │ 3.12 MB │
└───────────┴─────┴──────┴─────┴─────────┴─────────┴────────┴─────────┘

Req/Bytes counts sampled once per second.
# of samples: 20

3k requests in 20.04s, 58.6 MB read
```

Open the visual flamegraph from the provided url.
