# Unit 2: Integrate Mongoose into MEAN

## `docker run -p 27017:27017 --name mongo mongo`
- Run MongoDB in a Docker container

## `npm install`
- Install dependencies

## `npm start`
- Start node server

## Tests
- Server is available for api calls on the localhost.
- Install REST Client extension for VSCode.
- Use the requests in '/test' to test the api.

## Logon to mongo container

```bash
docker ps
docker exec -it mongo bash
```
- start a bash shell on the container named mongo.
- run interactively so the shell doesn't close right away.

```bash
mongo
```
- start the mongo shell from inside the container.

```bash
show databases      # or show dbs
use mean-book
```

- interact with the database through the `db` object.

```bash
db.users.find()
db.users.findOne({"username":"username"})
```

- the mongoose methods map directly to these mongodb methods.
- supply an object as an argument to query the database or blank to use defaults.

```bash 
db.users.remove({})
```
- the same is true to delete records.
- use an empty object to delete all records.
- there is no undo.