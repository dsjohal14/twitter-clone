import mongoose, { ConnectOptions }  from 'mongoose';
import constants from './constants';

mongoose.Promise = global.Promise;

mongoose.set('debug', true);

const options: ConnectOptions = {
    autoCreate:true
};

try {
  mongoose.connect(constants.DATABASE_URL, options);
} catch (err) {
  mongoose.createConnection(constants.DATABASE_URL, options);
}

mongoose.connection
  .once('open', () => {
    console.log('open connection');
  })
  .on('error', e => {
    throw e;
  });
