require('dotenv').config()
const express = require('express')
const OpenAI = require('openai')

const PORT = process.env.PORT || 3000
const client = new OpenAI({apiKey: 'OPEN_API_KEY'})


const app = express()
app.use(express.json())

const server = app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})

server.on('error', (error) => {
    console.log(`Error starting the server on http://localhost:${PORT}`, error);
})

async function (params) {
    
}






