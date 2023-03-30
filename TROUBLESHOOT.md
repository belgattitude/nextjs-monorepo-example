# TROUBLESHOOT

## Install fails

This repo uses the official but experimental [corepack](https://nodejs.org/api/corepack.html) to select the correct
package manager to use. Just enable it, then run install

```bash
corepack enable
yarn install
```

> PS: Same applies to docker. For vercel just add ENABLE_EXPERIMENTAL_COREPACK=1 to your vercel env.

## Development

### Limit of file watchers reached

Error: ENOSPC: System limit for number of file watchers reached
[Stackoverflow answer](https://stackoverflow.com/questions/55763428/react-native-error-enospc-system-limit-for-number-of-file-watchers-reached)

```
# insert the new value into the system config
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p

# check that the new value was applied
cat /proc/sys/fs/inotify/max_user_watches

# config variable name (not runnable)
fs.inotify.max_user_watches=524288
```
