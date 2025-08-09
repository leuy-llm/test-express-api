import mysql from 'mysql2/promise'
import { ENV } from '../config/env'


const db = mysql.createPool({
    promisse: true,
    host: ENV.MYSQL_HOST,
    port: ENV.MYSQL_PORT,
    user: ENV.MYSQL_USER,
    password: ENV.MYSQL_PASSWORD,
    database: ENV.MYSQL_DATABASE,
})