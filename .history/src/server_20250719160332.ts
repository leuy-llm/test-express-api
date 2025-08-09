import app from './app'

const PORT = process.env.DB_PORT || 3000

app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}/v1/api`)
})
