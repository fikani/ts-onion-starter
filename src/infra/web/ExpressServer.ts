import { App } from "@infra/index";
import { AppConfig } from "@config";
import express, { Express, Router } from "express";

export class ExpressServer implements App {
  private readonly app: Express;

  constructor(
    private readonly config: AppConfig,
    private readonly healthCheckRouter: Router
  ) {
    this.app = express();
  }

  start(): Promise<void> {
    this.app.use(this.healthCheckRouter);

    this.app.listen(this.config.port, this.config.host, () => {
      console.log("Example app listening on port " + this.config.port);
    });

    return Promise.resolve();
  }
}
