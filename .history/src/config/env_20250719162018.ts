import dotevn from "dotenv";

dotevn.config();

export const ENV = {
    PORT: Number(process.env.PORT) || 3000,
    MYSQL_HOST: process.env.DB_PORT || 'localhost',
    MYSQL_USER: process.env.DB_USER || 'root',
    MYSQL_PASSWORD: process.env.DB_PASSWORD || '',
    MYSQL_DATABASE: process.env.DB_NAME || 'tour_backend'
}