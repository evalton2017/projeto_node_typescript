import LoginRepository from "../repository/login-repository";
     
class LoginService {
  async get() {
   // let result = LoginRepository.find({'perfil':'ADMIN'});
   let result = LoginRepository.find({}).sort({data: -1});
    return result;
  }

  async getByEmail(email) {
    let result = LoginRepository.find({'email':email});
    return result;
  }
 
  async getById(_id) {
    let result = LoginRepository.findById(_id);
    return result;
  }
 
  async create(login) {
    let result = await LoginRepository.create(login);
    return result;
  }
 
   async update(_id, login) {
    let result = LoginRepository.findByIdAndUpdate(_id, login);
    return result;
  }
 
   async delete(_id) {
    let result = LoginRepository.findByIdAndRemove(_id);
    return result;
  }
}
 
export default new LoginService();