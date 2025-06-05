# Mundo Conectado - Assistente Virtual de Tecnologia

Este projeto é uma API Node.js que utiliza o modelo GPT da OpenAI para criar um assistente virtual chamado **Mundo Conectado**, especializado em responder dúvidas sobre tecnologia de forma simples e prática.

## Funcionalidades

- Responde perguntas sobre tecnologia, aplicativos, redes sociais e dicas do dia a dia.
- Não responde perguntas fora do tema tecnologia.
- Respostas sempre em texto simples (sem Markdown).

## Como usar

### Pré-requisitos

- Node.js 18+
- Conta na OpenAI e chave de API válida

### Instalação

1. Clone o repositório:
   ```sh
   git clone https://github.com/seu-usuario/projeto_LLM.git
   cd projeto_LLM
   ```

2. Instale as dependências:
   ```sh
   npm install
   ```

3. Crie um arquivo `.env` na raiz do projeto com sua chave da OpenAI:
   ```
   OPEN_API_KEY=sua-chave-aqui
   PORT=3000
   ```

### Executando o servidor

```sh
node index.js
```

O servidor estará disponível em `http://localhost:3000`.

### Endpoint

- **POST** `/chat`
  - Corpo da requisição (JSON):
    ```json
    {
      "message": "Sua dúvida sobre tecnologia"
    }
    ```
  - Resposta:
    ```json
    {
      "response": "Resposta do assistente"
    }
    ```

## Exemplo de uso com curl

```sh
curl -X POST http://localhost:3000/chat -H "Content-Type: application/json" -d "{\"message\": \"Como instalar o WhatsApp?\"}"
```

## Sobre

Este projeto foi desenvolvido para servir como um assistente virtual focado em tecnologia, utilizando a API da OpenAI para gerar respostas inteligentes e acessíveis.

---