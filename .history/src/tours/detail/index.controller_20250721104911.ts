import { Request, Response } from "express";
import db from "../../plugins/db";
import { getTourDetailById } from "./index.service";

// GET Tour Detail by ID
export const getTourDetail = async (req: Request, res: Response) => {
  try {
    const tourId = Number(req.params.id);
    const data = await getTourDetailById(db, tourId);

    res.status(200).json({
      success: true,
      message: "Tour detail fetched successfully",
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch tour detail",
      error,
    });
  }
};

// POST Booking Submission
// export const submitBooking = async (req: Request, res: Response) => {
//   try {
//     const bookingData = req.body;
//     await createTourBooking(db, bookingData);

//     res.status(201).json({
//       success: true,
//       message: "Booking submitted successfully",
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: "Failed to submit booking",
//       error,
//     });
//   }
// };
