export const getTourDetailById = async (db: any, tourId: number) => {
  const conn = await db.getConnection();
  try {
    const [[tour]] = await conn.query("SELECT * FROM tbl_tours WHERE id = ?", [tourId]);

    const [images] = await conn.query("SELECT * FROM tbl_tour_images WHERE tour_id = ?", [tourId]);
    const [includes] = await conn.query("SELECT * FROM tbl_tour_includes WHERE tour_id = ?", [tourId]);
    const [itinerary] = await conn.query("SELECT * FROM tbl_tour_itinerary WHERE tour_id = ? ORDER BY day ASC", [tourId]);

    return {
      ...tour,
      images,
      includes,
      itinerary,
    };
  } catch (error) {
    throw error;
  } finally {
    if (conn) conn.release();
  }
};

// export const createTourBooking = async (db: any, data: any) => {
//   const conn = await db.getConnection();
//   try {
//     const {
//       tour_id,
//       name,
//       email,
//       phone,
//       travel_date,
//       travelers,
//       special_requests,
//     } = data;

//     await conn.query(
//       `INSERT INTO tbl_tour_bookings 
//         (tour_id, name, email, phone, travel_date, travelers, special_requests, created_at) 
//        VALUES (?, ?, ?, ?, ?, ?, ?, NOW())`,
//       [tour_id, name, email, phone, travel_date, travelers, special_requests]
//     );
//   } catch (error) {
//     throw error;
//   } finally {
//     if (conn) conn.release();
//   }
// };
