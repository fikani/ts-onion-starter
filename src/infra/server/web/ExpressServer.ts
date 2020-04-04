import { AppServer } from "@infra/server";
import { AppConfig } from "@config";
import express, { Express } from "express";

export class ExpressServer implements AppServer {
  private readonly app: Express;

  constructor(private readonly config: AppConfig) {
    this.app = express();
  }

  start(): Promise<void> {
    this.app.get("/", function (req, res) {
      res.send("Hello World!");
    });

    this.app.listen(this.config.port, this.config.host, () => {
      console.log("Example app listening on port " + this.config.port);
    });

    return Promise.resolve();
  }
}
