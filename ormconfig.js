module.exports =
{
  "type": "sqlite",
  "host": process.env.NODE_ENV === "test" ? process.env.TEST_DB_HOST : process.env.DB_HOST,
  "port": process.env.NODE_ENV === "test" ? process.env.TEST_DB_PORT : process.env.DB_PORT,
  "database": `${root}/data/line.sqlite`,
  "synchronize": true,
  "logging": false,
  "dropSchema": process.env.NODE_ENV === "test" ? true : false,
  "entities": [
    __dirname + "/src/entities/**/*.ts"
  ],
  "migrations": [
    __dirname + "/src/migration/**/*.ts"
  ],
  "subscribers": [
    __dirname + "/src/subscriber/**/*.ts"
  ],
  "cli": {
    "entitiesDir": __dirname + "/src/entities",
    "migrationsDir": __dirname + "/src/migration",
    "subscribersDir": __dirname + "/src/subscriber"
  }
}

