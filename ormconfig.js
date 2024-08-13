import * as dotenv from 'dotenv';
require('dotenv').config();
dotenv.config();
module.exports={
    development: {
        host: 'localhost',
      port:5432,
      username: 'postgres',
      password: 'post16',
      database: 'ecommerce-n',
}
}