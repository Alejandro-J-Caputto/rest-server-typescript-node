import express, {Application} from 'express';
import cors from 'cors';
import  userRouter from '../routes/userRoutes';
import db from '../database/connectionDB';

export class Server {
  
  private app: Application;
  private port: string | number;
  private apiPathsEndpoint: {
    users: string
  } = {
    users: '/api/ts/v1/users'
  }
  constructor() {
    this.app = express();
    this.port = process.env.PORT || '8000';

    this.connectToDatabase();
    //Important methods which have preference in the middleware stack
    this.middlewares();
    //My routes 
    this.routes();
    //Conect to the database

  }
  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.static('./public'))
  }
  routes() {
    this.app.use(this.apiPathsEndpoint.users, userRouter)
  }
  //CONEXION WITH SEQUELIZE TO MYSQL
  // async connectToDatabase () {
  //   try {
  //     await db.authenticate();
  //     console.log('Database online')
  //   } catch(error) {
  //     throw new Error(error)
  //   }
  // }

  //Just regular conexion with MYSQL 

  async connectToDatabase () {

    await db.connect((err)=> {
      if(err) throw err;
      console.log('Connected')
    });
  
}

  listen() {
    this.app.listen(this.port, () => {
      console.log('Server running on port '+ this.port);
    } )
  }
}

export default Server;