# Getting started

## Prerequisites

- node
- postgres
- AWS account
- aws-cli

Make sure your lambda user can have access to VPC. You should also have postgres user named postgres.

```sh
aws configure
git clone git@github.tools.digital.engie.com:GBSEngieDigital/engie-bay-sls.git
npm install
npm start
```

# Scripts

## Migration

```sh
npm run db:migrate
```

# Postgres

## Offline

To see postgres logs we need to enable it:

```sh
psql postgres
# In psql:
show config_file;
show data_directory;
```

Edit config_file:

```sh
logging_collector = on
log_statement = 'all'
```

Restart postgres and you should see your logs in `data_directory`/log.

## development

Create on postgres instance on AWS. Update:

- `.env.development`
- `serverless.yml`

## Backup db

```sh
npm run db:backup:create
# or
pg_dump -U postgres slspgdb -Fc > backup.dump
```

## Restore db

```sh
npm run db:backup:restore
# or
dropdb slspgdb --if-exists
createdb slspgdb -O postgres
PGPASSWORD='' pg_restore -Fc --no-acl --no-owner -U postgres -d slspgdb backup.dump

# Test if books table is populated
psql slspgdb postgres -c "select * from books;"
```
