import * as HttpStatus from "http-status"
import loginService from "../service/login-service";
import helper from "../util/helper";
import * as redis from "redis";
import exportFile from "../util/export-file";
import {LoginDomain} from "../domain/login-domain";



class LoginController {

   async get(req, res) {
        //configuração docker compose
        //let client = redis.createClient(6379, "redis");
        let client = redis.createClient();

       await client.get('logins', async function (err, reply) {
           try{
                if (reply) {
                    console.log('redis')
                    helper.sendResponse(res, HttpStatus.OK, JSON.parse(reply));
                } else {
                    let result = await loginService.get();
                    console.log('db')
                    client.set('logins', JSON.stringify(result));
                    client.expire('logins',20)
                    helper.sendResponse(res, HttpStatus.OK, result);
            
                }
            }catch(error){
                console.log(error)
            }
        });

    }

    getById(req, res) {
        const _id = req.params.id;
        loginService.getById(_id)
            .then(login => helper.sendResponse(res, HttpStatus.OK, login))
            .catch(error => console.error.bind(console, `Error ${error}`));

    }

    getByEmail(req, res) {
        const email = req.params.email;
        loginService.getByEmail(email)
            .then(login => helper.sendResponse(res, HttpStatus.OK, login))
            .catch(error => console.error.bind(console, `Error ${error}`));

    }

    create(req, res) {
        let user: LoginDomain;
        user = new LoginDomain();   
        user = req.body;
        user.data = new Date();
        loginService.create(user)
            .then(login => helper.sendResponse(res, HttpStatus.OK, "Login cadastrado com sucesso"))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }

    update(req, res) {
        const _id = req.params.id;
        let vm = req.body;
        loginService.update(_id, vm)
            .then(login => helper.sendResponse(res, HttpStatus.OK, `Login do ususario ${vm.nome} atualizado com sucesso.`))
            .catch(error => console.error.bind(console, `Error ${error}`));

    }

    delete(req, res) {
        const _id = req.params.id;
        loginService.delete(_id)
            .then(login => helper.sendResponse(res, HttpStatus.OK, `Login deletado.`))
            .catch(error => console.error.bind(console, `Error ${error}`));

    }

    async exportToCsv(req,res){
        try{
            let response = await loginService.get();
            let filename = await exportFile.tocsv(response);
            helper.sendResponse(res, HttpStatus.OK, req.get('host')+"/exports/"+filename);
        }catch(error){
            console.error(error);
        }
    }

}

export default new LoginController();