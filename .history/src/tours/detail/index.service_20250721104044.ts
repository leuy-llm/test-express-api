import { Request, Response } from "express";
import db from "../../plugins/db";



//Get tour detail
export const getTourDetail = async (req: Request, res: Response) => {
    try {
        const id = req.params as { id: string };
        const [rows] = await db.query(`SELECT * FROM tbl_tours WHERE id = ?`, [id]);
        res.status(200).json({ success: true, message: "Get tour detail successfully", rows });
    }
}