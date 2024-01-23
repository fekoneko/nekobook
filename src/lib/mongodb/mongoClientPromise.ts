import { MongoClient } from 'mongodb';

const mongoClient = new MongoClient(process.env.DB_CONNECT_STRING);
export default mongoClient.connect();
