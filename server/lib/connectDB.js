import mongoose, { set, connect } from 'mongoose'
import { log, error } from 'console';



const connectDB = async () => {
    try {
      set('strictQuery', true);
      await connect(process.env.DB_URI);
      log('DB Connection successful!!');
    } catch (err) {
      error('DB Connection error:', err.message);
    }
  
    mongoose.connection.on('disconnected', () => {
      log('DB Disconnected!!');
    });
  };
  

export default connectDB;

