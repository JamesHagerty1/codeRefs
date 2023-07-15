import express, { Express, Request, Response } from "express";


const port = 3000;
const app: Express = express();


app.get("/", (req: Request, res: Response) => {
  console.log('got a request');
  res.send("Hello!");
});


app.listen(port, () => {
  console.log(`now listening on port ${port}`);
});