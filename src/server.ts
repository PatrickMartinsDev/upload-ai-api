import { fastify } from 'fastify'
import { fastifyCors } from '@fastify/cors'
import { getAllPromptRoute } from './routes/get-all-prmpts'
import { uploadVideoRoute } from './routes/upload-video'
import { createTranscriptionRoute } from './routes/create-transcription'
import { generateAiCompletionRoute } from './routes/generate-ai-completion'

const app = fastify()

// origin faz com que qualquer url consiga acessar o meu frontend
app.register(fastifyCors, {
  origin: '*'
})

app.register(getAllPromptRoute)
app.register(uploadVideoRoute)
app.register(createTranscriptionRoute)
app.register(generateAiCompletionRoute)

app.listen({
  port:3333
}).then(()=> {
  console.log('HTTP Server Running!')
})