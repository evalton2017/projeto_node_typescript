import * as mongoose from 'mongoose';

class Database {
//    private url = 'mongodb://link-db/db_login'
    private url = 'mongodb://localhost:27017/db_login'

    createConnection(){
        mongoose.set('useNewUrlParser', true);
        mongoose.set('useFindAndModify', false);
        mongoose.set('useCreateIndex', true);
        mongoose.set('useUnifiedTopology', true);
        mongoose.connect(this.url);
    }

}

export default Database;