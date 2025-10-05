import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import StudentRoutes from './routes/StudentRoutes.js';

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
}));

app.use('/api/students', StudentRoutes);

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("connected");
    app.listen(process.env.PORT || 4000, () => {
        console.log(`Server running on port ${process.env.PORT || 4000}`);
    });
    }).catch(err => 
        console.error("MongoDB connection error:", err));