import express from 'express';
import 'dotenv/config';
import { dbconnect } from './config/dbConfig.js';
import morgan from 'morgan';
import cookieparser from 'cookie-parser';
import cors from 'cors';
import userRoute from './Routes/userRouter.js';
const app = express();

dbconnect()

// Middleware
app.use(cors({
  origin: ['http://localhost:3000', 'https://mern-nk0y.onrender.com'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE','PATCH']
}));


app.use('/Public', express.static('Public'));
app.use(express.json()); // Parse JSON body
app.use(express.urlencoded({
  parameterLimit: 100000,
  limit: '50mb',
  extended: true })); // Parse URL-encoded bodies
app.use(cookieparser());
app.use(morgan('dev'));

// Routes
app.use('/', userRoute);

const port = 4000;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
