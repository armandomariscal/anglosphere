import { MongoClient, Db } from 'mongodb';
import * as dotenv from 'dotenv';

dotenv.config();

export class MongoDBClient {
  private static instance: MongoClient | null = null;
  private static dbInstance: Db | null = null;

  private static getUri(): string {
    const user = process.env.MONGO_ROOT_USER;
    const pass = process.env.MONGO_ROOT_PASSWORD;
    const host = process.env.DB_HOST;
    const port = process.env.DB_PORT;
    const dbName = process.env.MONGO_INITDB_DATABASE;

    if (!user || !pass) {
      throw new Error('Missing MongoDB credentials in .env');
    }

    return `mongodb://${user}:${pass}@${host}:${port}/${dbName}?authSource=${user}`;
  }

  public static async connect(): Promise<Db> {
    if (!this.dbInstance) {
      try {
        const uri = this.getUri();

        this.instance = new MongoClient(uri);
        await this.instance.connect();

        const dbName = process.env.MONGO_INITDB_DATABASE;
        this.dbInstance = this.instance.db(dbName);

        console.log(`Connected to MongoDB: ${dbName}`);
      } catch (error) {
        console.error('Failed to connect to MongoDB. Check your .env credentials.');
        throw error;
      }
    }
    return this.dbInstance;
  }

  public static async close(): Promise<void> {
    if (this.instance) {
      await this.instance.close();
      this.instance = null;
      this.dbInstance = null;
    }
  }
}