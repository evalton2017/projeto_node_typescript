import * as mongoose from 'mongoose';
import LoginSchema from '../model/login';

export default mongoose.model('logins', LoginSchema);