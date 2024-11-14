import express, { Application, Request, Response} from 'express'

const app: Application = express()

const port: number = 5000

app.get('/', ( req: Request, res: Response ) => {
    console.log(req)
    res.send('Greetings for typescript server... Hello! there')
})


app.listen(port, () => {
    console.log('server listening on port: ' + port)
})
