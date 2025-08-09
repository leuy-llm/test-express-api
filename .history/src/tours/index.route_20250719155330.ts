import { Router } from 'express'
import { getNavigation } from './navigation/index.controller'

const router = Router()

//=== Get navigation ===//
router.use('/webtour/data/navigation/list', getNavigation)

export default router
