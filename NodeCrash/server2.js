import http from 'http'

const port = process.env.PORT

const server = http.createServer((req, res) => {
    // res.write('Helo World!')
    // res.setHeader('Content-Type', 'text/html')
    // res.statusCode = 404
    console.log(req.url, req.method)
    res.writeHead(500, {'content-type': 'application/json'})

    // res.end('<h1 style="color: red">Hello world!</h1>')
    res.end(JSON.stringify({message: 'internal server error'}) )
})

server.listen(port, () => {
    console.log('Server is currently running on port...'+ port)
})