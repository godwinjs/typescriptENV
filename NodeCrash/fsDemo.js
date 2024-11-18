// import fs from 'fs'
import fs from 'fs/promises'

export const logToFile = async (log) => {

    try{
        await log
        await fs.appendFile('./NodeCrash/test.txt', '\n'+log)
        // console.log('logging to file...')
    }catch(err){
        console.log(err)
    }
}

// dataAsync.then((data) => console.log(data)).catch(err => console.log(err) )
export const file = async () => {
    const data = await dataAsync;
    return data
}


// const data = fs.readFile('./nodeCrash/test.txt','utf8', (err, data) => {
//     if (err) throw err;
//     // console.log(data)
//     return data
// })
// export const dataSync = fs.readFileSync('./nodeCrash/test.txt', 'utf8', (err, data) => {
//     if (err) throw err;
//     // console.log(data)
//     return data
// })
export const dataAsync = fs.readFile('./NodeCrash/test.txt', 'utf8')

// export default data;