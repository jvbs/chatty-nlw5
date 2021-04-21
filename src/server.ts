import express from 'express'

const app = express()

/**
 * GET - Buscas
 * POST - Criação
 * PUT - Alteração
 * DELETAR - Deletar
 * PATCH - Alterar uma informação específica
 */

app.get('/', (req, res) => {
  // return res.send('Olá NLW #5')
  return res.json({
    message: 'ola nlw 5'
  })
})

app.listen(3333, () => console.log('Server is running...'))