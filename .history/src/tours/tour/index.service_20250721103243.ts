export const getTour = async (db: any) => {
  const conn = await db.getConnection();
  try {
    const [rows] = await conn.query(`SELECT * FROM tbl_tours`);
    const [countSql] = await conn.query(`SELECT COUNT(*) AS total FROM tbl_tours`);
    const total = countSql[0].total;

    return { rows, total };
  } catch (error) {
    throw error;
  } finally {
    if (conn) conn.release();
  }
};
