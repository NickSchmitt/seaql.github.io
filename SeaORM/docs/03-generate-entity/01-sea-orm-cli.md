# Using `sea-orm-cli`

First, install `sea-orm-cli` with `cargo`.

```shell
$ cargo install sea-orm-cli
```

## Configure Environment

Setting `DATABASE_URL` in your environment, or create a `.env` file in your project root. Specify your database connection.

```env title=".env"
DATABASE_URL=sql://username:password@localhost/database
```

## Getting Help

Use `-h` flag on any CLI command or subcommand for help.

```shell
# List all available commands
$ sea-orm-cli -h

# List all subcommands available in `generate` command
$ sea-orm-cli generate -h

# Show how to use `generate entity` subcommand
$ sea-orm-cli generate entity -h
```

## Generating Entity Files

Discover all tables in a database and generate a corresponding SeaORM entity file for each table.

> Generating Entity files from SQLite is not yet supported. You can write the entity files by hand, and then use the Entity to [initialize a database](/docs/write-test/sqlite#setup-database-schema).

Command line options:
- `-u` / `--database-url`: database URL (default: DATABASE_URL specified in ENV)
- `-s` / `--database-schema`: database schema (default: DATABASE_SCHEMA specified in ENV)
    - For MySQL, this argument is ignored
    - For PostgreSQL, this argument is optional with default value 'public'
- `-o` / `--output-dir`: entity file output directory (default: current directory)
- `-v` / `--verbose`: print debug messages
- `--include-hidden-tables`: generate entity files from hidden tables (table names starting with an underscore are ignored by default)
- `--compact-format`: Generate entity file of [compact format](/docs/generate-entity/entity-structure) (default: true)
- `--expanded-format`: Generate entity file of [expanded format](/docs/generate-entity/expanded-entity-structure)

```shell
# Generate entity files of database `bakery` to `src/entity`
$ sea-orm-cli generate entity \
    -u sql://sea:sea@localhost/bakery \
    -o src/entity
```
