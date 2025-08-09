import { Request, Response } from 'express'
export const getNavigation = async (req:Request, res:Response): Promise<void> => {
    res.send('Navigation')
}