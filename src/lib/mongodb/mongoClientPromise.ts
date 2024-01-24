import { MongoClient } from 'mongodb';

const mongoUri = process.env.MONGO_URI;

const getMongoClientPromise = () => {
  if (process.env.NODE_ENV === 'development') {
    // Add mongoClientPromise to global for hot reloads in development
    const globalWithMongoClientPromise = global as typeof globalThis & {
      _mongoClientPromise?: Promise<MongoClient>;
    };

    if (!globalWithMongoClientPromise._mongoClientPromise) {
      const mongoClient = new MongoClient(mongoUri);
      globalWithMongoClientPromise._mongoClientPromise = mongoClient.connect();
    }
    return globalWithMongoClientPromise._mongoClientPromise;
  } else {
    const mongoClient = new MongoClient(mongoUri);
    return mongoClient.connect();
  }
};

export default getMongoClientPromise();
