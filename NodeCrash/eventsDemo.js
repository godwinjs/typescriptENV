import { EventEmitter } from "events"

const myEmitter = new EventEmitter()

function greetHandler(name) {
    console.log('Hello world ' + name)
} 

function goodbyeHandler(name) {
    console.log('goodbye world! '+name)
}

// Register event listenners
myEmitter.on('greet', greetHandler)
myEmitter.on('goodbye', goodbyeHandler)

// Emit events
myEmitter.emit('greet', 'John')
myEmitter.emit('goodbye', 'John')

// error handling
myEmitter.on('error', (err) => {
    console.log('An error occured', err)
})

// simulate Error
// myEmitter.emit('error', new Error('something went wrong'))
