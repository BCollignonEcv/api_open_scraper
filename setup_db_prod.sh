# abort on errors
set -e

# Migrate Sqlite database
npx sequelize-cli db:migrate

# Add data to database
npx sequelize-cli db:seed --seed 20220116223125-default-data.prod.js