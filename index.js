import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { routes } from './src/routes/routes.js';
import getConnection from './src/database/connection.mysql.js';
dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.urlencoded({ extended: true }))
app.use(express.json());

const allowedOrigins = process.env.NODE_ENV === "production"
    ? ["https://d10mas.com", "https://academia.d10mas.com"]
    : ["http://localhost:1600", "http://localhost:5173", "http://localhost:5174"];

const corsOptions = {
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("No permitido por CORS"));
        }
    },
    methods: ["POST", "GET"],
    credentials: true
};

app.use(cors(corsOptions));
app.use('/d10/server/v1', routes());

//Conect database
const connDb = await getConnection();
if (!connDb) {
    console.log("\n*****************************");
    console.log("Error connecting to database");
    console.log("*****************************\n");
}
else {
    console.log("\n*****************************");
    console.log("Connected to database");
    console.log("*****************************\n");
}

// API Working
app.get('/', (req, res) => {
    res.json('Working');
})

app.listen(PORT, () => {
    console.log("*****************************");
    console.log(`Server listen on http://localhost:${PORT}/d10/server/v1`);
    console.log("*****************************\n");
});
