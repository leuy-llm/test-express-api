export const getNavbar = async (db: any) => {
    const conn = await db.getConnection()
    try {
        const [rows] = await conn.query(`SELECT * FROM tbl_navigations`)
        const [countSql] = await conn.query(`SELECT COUNT(*) AS total FROM tbl_navigations`)
        const total = countSql[0].total

        return { rows, total }
    } catch (error) {
    } finally {
    if (conn) {
        conn.release()
    }
    }
}