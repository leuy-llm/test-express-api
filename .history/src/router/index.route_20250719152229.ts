import { Router } from 'express'
import tourModuleRoutes from '../tours/index.route'

const router = Router()

// Register all tour-related routes
router.use('/', tourModuleRoutes)

export default router
