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

// https://www.bing.com/videos/riverview/relatedvideo?q=decorators%20in%20typescript&mid=73D1F5A40CEF35F9EA6A73D1F5A40CEF35F9EA6A&ajaxhist=0