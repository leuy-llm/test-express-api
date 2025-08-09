import { Request, Response } from 'express'
import db from '../../plugins/db'
import { getHeroData } from './index.service'

export const getHeroSection = async (req: Request, res: Response): Promise<void> => {
  try {
    const { heroSection, heroStats }: any = await getHeroData(db)

    res.status(200).json({
      success: true,
      message: 'Get hero section and stats successfully',
      hero_section: heroSection,
      hero_stats: heroStats
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Get hero section and stats failed',
      error
    })
  }
}
