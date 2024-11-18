"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 5000;
app.get('/', (req, res) => {
    console.log(req);
    res.send('Greetings for typescript server... Hello! there');
});
app.listen(port, () => {
    console.log('server listening on port: ' + port);
});
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
// Typescript 1hr 6m: https://www.youtube.com/watch?v=1F4w31iPX74&pp=ygUTdHlwZXNjcmlwdCBpbiAxaG91cg%3D%3D
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
