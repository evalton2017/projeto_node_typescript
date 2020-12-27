import * as express from 'express';
import Database from './util/database';
import * as bodyParser from 'body-parser';
import loginRouter from './router/login-router';

import * as cors from 'cors';
import Auth from './util/auth';
import uploads from './util/upload';

class StartUp{

    public app: express.Application;
    private db: Database;
    private bodyParser;

    constructor(){
        this.app = express();
        this.db = new Database();
        this.db.createConnection();
        this.middler();
        this.routes();
    }

    middler(){
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: false}));
        this.enableCors();
        this.app.use('/exports', express.static(process.cwd()+'/exports'))
    }

    enableCors(){
        const options: cors.CorsOptions = {  
            methods: "GET,OPTIONS,PUT,POST,DELETE",
            origin: "*",
        }

        this.app.use(cors(options));
    }

    
    routes(){
    


        this.app.route('/').get((req, res) =>{    
            res.send({token:Auth.gerarToken()});
        });

        this.app.route("/uploads").post(uploads.single("file"),(req, res) =>{    
            try{
                res.send("arquivo enviado com sucesso!")
            }catch(error){
                console.log(error)
            }
        });

       // this.app.use(Auth.validate);
       this.app.use("/api", loginRouter);      

    }

}

export default new StartUp();
