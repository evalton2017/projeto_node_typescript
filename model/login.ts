import * as mongoose from 'mongoose';

const LoginSchema = new mongoose.Schema({
    nome:{type: String},
    email:{type: String},
    password:{type: String},
    perfil:{type: String},
    data: {type: Date}
});

export default LoginSchema;
