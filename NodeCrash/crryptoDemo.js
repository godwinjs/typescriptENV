import crypto from 'crypto'

const hash = crypto.createHash('sha256');
hash.update('password1234')
// console.log(hash.digest('hex'))

crypto.randomBytes(16, (err, buf) => {
    if(err) throw err;
    // console.log(buf.toString('hex'))
})

// createCipheriv & createDecipheiv
// 
const algorithm = 'aes-256-cbc'
const key = crypto.randomBytes(32)
const iv = crypto.randomBytes(16)
// get cypher text
const cipher = crypto.createCipheriv(algorithm, key, iv)
let encrypted = cipher.update('Hello, this is a secret message', 'utf8', 'hex')
encrypted += cipher.final('hex');
console.log(encrypted)

//  createDecipheiv
const deCipher = crypto.createDecipheriv(algorithm, key, iv)
let decrypted = deCipher.update(encrypted, 'hex', 'utf8')
decrypted += deCipher.final('utf8')
console.log(decrypted)

