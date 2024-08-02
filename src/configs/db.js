import mongoose from "mongoose";
const connectDB = async () => {
    const dbConnection = process.env.DB_CONNECTION || 'mongodb';
    const dbHost = process.env.DB_HOST || 'localhost';
    const dbPort = process.env.DB_PORT || 27017;
    const dbDatabase = process.env.DB_DATABASE || 'test';
    const dbUsername = process.env.DB_USERNAME || '';
    const dbPassword = process.env.DB_PASSWORD || '';

    const auth = dbUsername && dbPassword ? `${dbUsername}:${dbPassword}@` : '';
    const mongoUri = `${dbConnection}://${auth}${dbHost}:${dbPort}/${dbDatabase}`;
    console.log(mongoUri);
    return mongoose.connect(mongoUri).then(() => {
        console.log('MongoDB connected successfully');
    }).catch(err => {
        console.error('MongoDB connection error:', err.message);
        process.exit(1);
    });
}
export default connectDB;