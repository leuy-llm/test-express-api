import dotevn from "dotenv";

dotevn.config();

export const ENV = {
    PORT: Number(process.env.PORT) || 3000,
    MYSQL_HOST: process.env.MYSQL_PORT || 'localhost',
    MYSQL_PORT: Number(process.env.MYSQL_PORT) || 3306,
    MYSQL_USER: process.env.MYSQL_USER || 'root',
    MYSQL_PASSWORD: process.env.MYSQL_PASSWORD || '',
    MYSQL_DATABASE: process.env.MYSQL_DATABASE || 'tour_backend'
}