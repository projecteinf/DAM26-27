import express, { Express, Request, Response } from "express";

const port: number = 3000;

const app: Express = express();

app.get("/", (_req: Request, res: Response) => { // _req → petició rebuda però no utilitzada
  res.json({ message: "API funcionant correctament" });
});

app.listen(port, () => {
  console.log(`Servidor escoltant a http://localhost:${port}`);
});