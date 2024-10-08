import authRoute from './src/routes/auth.route.js';
import { connectDB } from './src/db/connectDB.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));

app.use(express.json());
app.use(cookieParser());

const run = async () => {
  await connectDB();
};

run().catch((err) => console.log(err));

app.get('/', (req, res) => res.send('Express on Vercel'));
app.use('/api/auth', authRoute);

app.listen(PORT, async () => {
  console.log('Server started on port:', PORT);
});

export default app;
