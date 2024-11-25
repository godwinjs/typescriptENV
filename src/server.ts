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

// import { 
//     Palette as MuiPallete 
// } from '@mui/material/styles/createPalette';
  
// declare module '@mui/material/styles/createPalette' {
//     interface Palette extends MuiPallete {
//         custom: {
//             prop1: string;
//         }
//     }
// }

// https://www.bing.com/videos/riverview/relatedvideo?q=decorators%20in%20typescript&mid=73D1F5A40CEF35F9EA6A73D1F5A40CEF35F9EA6A&ajaxhist=0
// GraphQL 4hrs: https://www.youtube.com/watch?v=yqWzCV0kU_c
// NextJs15 1hrs: https://www.youtube.com/watch?v=_EgI9WH8q1A
// NodeJs 2hrs: https://www.youtube.com/watch?v=32M1al-Y6Ag
// ReduxToolkit 1hr: https://www.youtube.com/watch?v=pX0SBJF01EU
// ReduxToolkit : https://www.youtube.com/watch?v=A8blgpj78kM
// Typescript 1hr Deeecode 6m: https://www.youtube.com/watch?v=1F4w31iPX74&pp=ygUTdHlwZXNjcmlwdCBpbiAxaG91cg%3D%3D
// typescript 1hr 2y: https://www.youtube.com/watch?v=d56mG7DezGs&t=177s&pp=ygUTdHlwZXNjcmlwdCBpbiAxaG91cg%3D%3D
// typescript 4hrs 2ys: https://www.youtube.com/watch?v=30LWjhZzg50&pp=ygUTdHlwZXNjcmlwdCBpbiAxaG91cg%3D%3D
// mongoDB 1hr 1yr: https://www.youtube.com/watch?v=c2M-rlkkT5o&pp=ygUQbW9uZ29vc2UgaW4gMSBocg%3D%3D
// event Loop : https://www.youtube.com/watch?v=okkHnAo8GmE
// EventListeners Delegation: https://www.youtube.com/watch?v=cOoP8-NPLSo
// component life circle hooks: https://www.youtube.com/watch?v=yHdX4dCl5CY&t=123s
// ReactJS Tutorial - 23 - Component Mounting Lifecycle Methods: https://www.youtube.com/watch?v=KDXZibVdiEI&t=13s
// laz javascript int: https://www.youtube.com/watch?v=8eRVxE9PEF0&t=561s
// faizal snr backend dev int: https://www.youtube.com/watch?v=e_i2RETG0yo&t=305s
// victor snr fullstack dev int: https://www.youtube.com/watch?v=Y8tlFLIjyMU
// js snr dev int: https://www.youtube.com/watch?v=8eRVxE9PEF0
//  nodejs tech int: https://www.youtube.com/watch?v=MpjrjwCWFjM
// fayzullar nodejs int: https://www.youtube.com/watch?v=jdwwGc5YZ70
// ReactJs tech int marco: https://www.youtube.com/watch?v=7JG-VwMiTgE
// rakib reactjs mock int: https://www.youtube.com/watch?v=6qERg1Yt1QQ
// React crash course
// NodeJs with typescript crashCourse 
// Learning Well Tips: https://www.youtube.com/watch?v=okHkUIW46ks
// Negotiation :https://www.youtube.com/watch?v=BLBRRNwMZNE


// https://www.upwork.com/nx/proposals/1857372334878019585
// https://www.optimusbank.com/
// https://app.snov.io/login?ref=techcheker
// SpeedTest: https://www.google.com/search?q=internet+speed+test&oq=inte&gs_lcrp=EgZjaHJvbWUqBwgBEAAYjwIyBggAEEUYOTIHCAEQABiPAjIHCAIQABiPAjIHCAMQABiPAjIGCAQQRRg9MgYIBRBFGDwyBggGEEUYPDIGCAcQRRhB0gEIMjk5N2owajeoAgewAgE&sourceid=chrome&ie=UTF-8

// If you have a chatbot that responds with noisy data, how do you make sure it responds with correct output? is there a library you can use to achieve this?
// How do you work effectly with big data on the client side app, the backend and the database?
// how do you make sure the file uploaded on the client side if of the right dataset for a chatbot application?
// how do you make sure a user uploads the right file on your frontend chatbot?
// are there libraries or tools that can be utilized reduces hullicination in llms?
