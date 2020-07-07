# Angular Passport Authentication

## Run with Docker
- Set NODE_ENV in `docker-compose.yml`.

```bash
docker-compose up --build
```
- A sandboxed environment with server running at http://localhost/
- The `--build` flag is optional to cause a rebuild of the image

## Run local
```bash
docker run -p 27017:27017 --name mongo mongo
```
- You at least need to have MongoDB running on the localhost.
- Change the db connection string to use localhost in `./app/config/env`

```bash
npm install
```
- Install dependencies to `node_modules`

```bash
npm start
```
- Configures `typings` and compiles TypeScript in `public/app`.
- Start node server running at http://localhost:3000/

## Cleanup development files
```bash
git clean -xdf
```
- Removes untracked and ignored files and folders.
- Use `-X` flag instead of `-x` to only remove tracked files.
- Use `--dry-run` to preview the results.

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