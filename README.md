# firebase

## setup

```bash
$ docker-compose build
$ docker-compose up -d
$ docker-compose down
# status check
$ docker ps -a
```

```bash
# docker-compose exec <container_name>

# package install
$ docker-compose exec firebase bash -c "npm i && cd functions && npm i"

# emulator
$ docker-compose exec firebase bash -c "firebase emulators:start"
```
