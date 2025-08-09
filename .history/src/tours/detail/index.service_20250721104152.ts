import { Request, Response } from "express";
import db from "../../plugins/db";



//Get tour detail
export const getTourDetail = async (req: Request, res: Response) => {
    try {
        const { id } = req.params as { id: string };
        const data = await getTourDetailData(db, parseInt(id));

        res.status(200).json({
            success: true,
            message: "Get tour detail successfully",
            data,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Get tour detail failed",
            error,
        });
    }
}