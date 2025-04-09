
import express from "express";
import { Prisma } from "@prisma/client";

console.log('test')

const app = express();
const port = 3000;

app.use(express.json());

app.listen(port, ()=>{
    console.log(`Server is running on http:localhost:${port}`);
});

