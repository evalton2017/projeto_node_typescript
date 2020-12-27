import * as jwt from 'jsonwebtoken';
import  Config from './config';

class Auth{

    validate(req, res, next){

        var token = req.headers['x-access-token'];

        if(token){
            jwt.verify(token, Config.secret, function(err, decoded){
                if(err){
                    return res.status(401).send({
                        success: false,
                        message: '401- unauthorized'
                    })
                }else{
                    next();
                }
            })
        }else{
            return res.status(401).send({
                success: false,
                message: '401- unauthorized'
            })
        }
    }
    
    gerarToken(){
        console.log('gerando token')
        let payload = {
            iss: "evalton",
            iat: new Date().getSeconds(),
            exp: new Date().setMinutes(30),
            name: "Evalton Gomes",
            email: "evalton.nunes@gmail.com"
        }

        var token = jwt.sign(payload, "duke corajoso");
        return token;
    }
}

export default new Auth();
