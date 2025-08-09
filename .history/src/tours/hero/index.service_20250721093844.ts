export const getHeroData = async (db: any) => {
  const conn = await db.getConnection()
  try {
    // Get the active hero section
    const [heroRows] = await conn.query(`SELECT * FROM tbl_hero_sections WHERE is_active = 1 LIMIT 1`)
    const heroSection = heroRows[0]

    let heroStats = []
    if (heroSection) {
      const [statsRows] = await conn.query(
        `SELECT * FROM tbl_hero_stats WHERE hero_section_id = ? AND is_active = 1 ORDER BY position_order ASC`,
        [heroSection.id]
      )
      heroStats = statsRows
    }

    return { heroSection, heroStats }
  } catch (error) {
    throw error
  } finally {
    if (conn) {
      conn.release()
    }
  }
}
