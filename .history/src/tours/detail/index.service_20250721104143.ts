import { Request, Response } from "express";
import db from "../../plugins/db";



//Get tour detail
export const getTourDetail = async (req: Request, res: Response) => {
    try {
        const { id } = req.params as { id: string };
        const data = await getTourDetailData(db, parseInt(id));
    }
}