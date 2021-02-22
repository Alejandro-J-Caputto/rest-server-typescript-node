import dotenv from 'dotenv';  
import Server from './models/server';

//Run our global variables ex: process.env.DB..
dotenv.config();

//Instanciates our Server
const server = new Server();

//Listen to the provided port
server.listen()



