import { MongoDBClient } from './infrastructure/MongoDBClient';

async function bootstrap() {
    try {
        const db = await MongoDBClient.connect();
    
        const count = await db.collection('locations').countDocuments();
    
        console.log(`--- Server Status ---`);
        console.log(`Database connected: YES`);
        console.log(`Total locations found: ${count}`);
    
    } catch (error) {
        console.error('Bootstrap failed:', error);
    }
}

bootstrap();