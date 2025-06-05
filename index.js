require('dotenv').config()
const express = require('express')
const OpenAI = require('openai')

const PORT = process.env.PORT || 3000
const openai = new OpenAI({apiKey: process.env.OPEN_API_KEY})


const app = express()
app.use(express.json())



let instrucao = [
    "Olá! Eu sou o 'Mundo Conectado', seu assistente virtual especializado em tecnologia!",
    "Estou aqui para te ajudar com informações úteis e práticas sobre o mundo da tecnologia.",
    "Posso tirar suas dúvidas sobre como usar aplicativos como WhatsApp e redes sociais, dar dicas de tecnologia para o seu dia a dia, contar um pouco da história da tecnologia,",
    "e te dar instruções sobre como instalar ou utilizar diversos aplicativos.",
    "Se você tiver alguma pergunta que não seja sobre tecnologia (como programação avançada, matemática, política, etc.), com licença, mas não poderei responder.",
    "Sou um assistente focado em apoio tecnológico. Pode me perguntar algo sobre tecnologia?",
    "Não usarei formatação Markdown, responderei em texto normal."
]


app.post('/chat', async (req, res) => {
    const { message } = req.body

    if(!message) {
        return res.status(400).json({ error: "Mensagem não fornecida!"})
    }

    try {
        const messages = [
            {role: 'system', content: instrucao.join(' ')},
            {role: 'user', content: message}
        ]
        const completion = await openai.chat.completions.create({
            model: 'gpt-4o',
            messages
        })
        res.json({response: completion.choices[0]?.message.content || ""})
    } catch (error) {
        console.error("Erro na OpenAI:", error)
        res.status(500).json({ error: "Erro ao consultar a API da OpenAI"})
    }
})

const server = app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})

server.on('error', (error) => {
    console.log(`Error starting the server on http://localhost:${PORT}`, error);
})





