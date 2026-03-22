const express = require('express')
const path = require('path')
const fs = require('fs')

const app = express()
const PORT = process.env.PORT || 3000
const DIST = path.join(__dirname, 'dist')
const indexHtml = fs.readFileSync(path.join(DIST, 'index.html'), 'utf8')

// Serve static files from the Vite build output
app.use(express.static(DIST))

// SPA fallback — send index.html for all non-file routes
app.use((req, res) => {
  res.setHeader('Content-Type', 'text/html')
  res.status(200).send(indexHtml)
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
