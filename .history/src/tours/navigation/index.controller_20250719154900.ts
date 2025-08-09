import { Request, Response } from 'express'
export const getNavigation = async (req:Request, res:Response): Promise<void> => {
    try {
        const { rows, total } = await getAllCategory(db)
    }
}