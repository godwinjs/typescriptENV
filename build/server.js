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
// https://www.bing.com/videos/riverview/relatedvideo?q=decorators%20in%20typescript&mid=73D1F5A40CEF35F9EA6A73D1F5A40CEF35F9EA6A&ajaxhist=0
