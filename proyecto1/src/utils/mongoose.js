import { connect } from 'mongoose';
import {connection} from 'mongoose';

const conn = {
  isConnected: false,
};

export async function dbConnect(){
  const db = await connect(process.env.MONGODB_URI);
  conn.isConnected = db.connections[0].readyState;
}

connection.on('error',(err)=>{
  console.log(err);
})