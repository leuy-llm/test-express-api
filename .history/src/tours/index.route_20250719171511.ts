import { Router } from 'express'
import { getNavigation } from './navigation/index.controller'

const router = Router()

//=== Get navigation ===//
router.post('/webtour/data/navigation/list', getNavigation)
router.post('/webtour/data/hero', getHeroSection)
export default router
