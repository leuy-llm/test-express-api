import { Router } from 'express'
import { getNavigation } from './navigation/index.controller'
import { getHeroSection } from './hero/index.controller'
import { getTour } from './tour/index.service'

const router = Router()

//=== Get navigation ===//
router.post('/webtour/data/navigation/list', getNavigation)
router.post('/webtour/data/hero', getHeroSection)
router.post('/webtour/data/tours', getTour)
export default router
