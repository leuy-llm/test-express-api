import { Router } from 'express'
import { getNavigation } from './navigation/index.controller'
import { getHeroSection } from './hero/index.controller'
import { getTours } from './tour/index.controller'

const router = Router()

//=== Get navigation ===//
router.post('/webtour/data/navigation/list', getNavigation)
router.post('/webtour/data/hero', getHeroSection)
router.post('/webtour/data/tours', getTours)
export default router
