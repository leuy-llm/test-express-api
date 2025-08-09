// src/router/index.route.ts
import { Router } from 'express'
import bookingRoutes from './tours/booking.route'

const router = Router()

// Example: mount booking route under /v1/api/bookings
router.use('/bookings', bookingRoutes)

export default router
