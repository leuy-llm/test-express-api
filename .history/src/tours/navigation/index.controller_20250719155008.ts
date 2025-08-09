import { Request, Response } from 'express'
import db from '../../config/db'
export const getNavigation = async (req:Request, res:Response): Promise<void> => {
    try {
        const { rows, total } = await getNavbar(db)

        res.status(200).json({
            success: true,
            message: 'Get navigation successfully',
            rows: rows,
            total: total
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Get navigation failed',
            error: error
        })
    }
}