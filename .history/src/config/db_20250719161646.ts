import mysql from 'mysql2/promise'
import dotenv from 'dotenv'

dotenv.config()

// Create MySQL connection pool
const db = mysql.createPool({
  PORT: process.env.PORT,
})

export default db
