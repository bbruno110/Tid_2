import 'dotenv/config';
import express, { ErrorRequestHandler, Request, Response } from 'express';
import path from 'path';
import passport from 'passport';
import { MulterError } from 'multer';
import cors from 'cors';

const server = express();
server.use(express.json());
server.use(cors());
server.use(express.urlencoded({ extended: true }));
server.use(express.static(path.join(__dirname, "/public")));
server.use(passport.initialize());
//server.use(router);
server.use((req:Request, res:Response)=>{
    res.status(404);
    res.json({error: 'Endpoint não encontrado.'});
});
const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
    if(err.status) {
        res.status(err.status)
    } else {
        res.status(400) //BAD REQUEST
    }
    if(err.message) {
        res.json({error: err.message});
    } else {
        res.json({error: 'Ocorreu algum erro, contate o suporte'})
    }
    if(err instanceof MulterError) {
        res.json({
            error: err.code,
            message: err.message
        })
    }
}
server.use(errorHandler);
let date_ob = new Date();
let date = ("0" + date_ob.getDate()).slice(-2);
let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
let year = date_ob.getFullYear();
let hours = date_ob.getHours();
let minutes = date_ob.getMinutes();
let seconds = date_ob.getSeconds();
console.log(year + "/" + month + "/" + date + " " + hours + ":" + minutes + ":" + seconds);
server.listen(process.env.PORT);
export default server;