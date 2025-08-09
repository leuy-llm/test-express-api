import mysql from 'mysql2/promise'
import dotenv from 'dotenv'
import { ENV } from '../config/env'

dotenv.config()

// Create MySQL connection pool
const db = mysql.createPool({
    host: ENV.MYSQL_HOST,
    port: ENV.MYSQL_PORT,
    user: ENV.MYSQL_USER,
    password: ENV.MYSQL_PASSWORD,
     database: ENV.MYSQL_DATABASE,
})

export default db
