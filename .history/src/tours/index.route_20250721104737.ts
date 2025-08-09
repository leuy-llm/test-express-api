import { Router } from 'express'
import { getNavigation } from './navigation/index.controller'
import { getHeroSection } from './hero/index.controller'
import { getTours } from './tour/index.controller'
import { getTourDetailData } from './detail/index.controller'

const router = Router()

//=== Get navigation ===//
router.post('/webtour/data/navigation/list', getNavigation)
router.post('/webtour/data/hero', getHeroSection)
router.post('/webtour/data/tours', getTours)
router.get('/webtour/data/tours/uuid', getTourDetailData)
export default router
