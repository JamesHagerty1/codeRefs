// typescript doesn't do imports with require() like node.js usually does
import express, { Express, Request, Response } from "express";


const port = 8000;
const app: Express = express();


app.get("/", (req: Request, res: Response) => {
  res.send("Hello!");
});


app.listen(port, () => {
  console.log(`now listening on port ${port}`);
});