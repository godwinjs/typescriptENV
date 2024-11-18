import { createServer } from "http"
const PORT = process.env.PORT

console.log(process.argv)
// node file.js import
// process.argv = ['nodeurl', 'fileurl', 'import']

console.log(process.env.COMPUTERNAME)
console.log(process.cwd())
console.log(process.title)
console.table(process.memoryUsage())
console.log(process.uptime())
process.on('exit', (code) => {
    console.log('about to exit with code ' + code)
})
console.log(process.exit(0))//suceess exit
console.log(process.exit(1)) //fail exit





// import { dataAsync} from './fsDemo.js'









// console.log(file(), appendToFile())
const users = [
    { id:1, name: 'John Doe'}, 
    { id: 2, name: 'Jane Doe'},
    { id: 3, name: 'James Doe'},
    { id: 4, name: 'Jemma Doe'}
]
// logToFile(JSON.stringify(users))

// middleware
const logger = ( req, res, next ) => {
    // you can chain middleware
    console.log(`${req.method} ${req.url}`)
    next()
}

const server = createServer(( req, res) => {
    logger(req, res, () => {
        switch(req.method){
            case "GET": 
                res.setHeader('Content-Type', 'application/json')
    
                if(req.url === '/api/users'){
                    res.write(JSON.stringify(users))
                }else if(req.url.match(/\/api\/user\/([0-9]+)/)){
                    const id = req.url.split('/')[3]
                    const user = users.find((user) => user.id === parseInt(id))
                    res.write(JSON.stringify(user))
                }else if(req.url === '/'){
                    res.write('Hello World!')
                }else{
                    res.writeHead(404, {'content-type': 'application/json'})
                    res.end(JSON.stringify({message: 'Route not found'}) )
                }
                res.end()
                break;
            default:
                res.writeHead(404, {'content-type': 'application/json'})
                res.end(JSON.stringify({message: 'Method not allowed'}) )
        }
    })
    
})

server.listen(PORT, () => {
    console.log('connected on port: ...' + PORT)
})