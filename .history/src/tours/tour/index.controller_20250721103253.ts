import { Request, Response } from "express";
import db from "../../plugins/db"; // adjust this path to your DB instance
import { getTour } from "./tour.service"; // your service function

export const getTours = async (req: Request, res: Response): Promise<void> => {
  try {
    const { rows, total } = await getTour(db);

    res.status(200).json({
      success: true,
      message: "Fetched tours successfully",
      rows,
      total,
    });
  } catch (error) {
    console.error("Error fetching tours:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch tours",
      error: error instanceof Error ? error.message : error,
    });
  }
};
