import { App } from "@infra/index";
import express, { Express, Router } from "express";

export class ExpressServer implements App {
  private readonly app: Express;

  constructor(
    private readonly port: number,
    private readonly host: string,
    private readonly healthCheckRouter: Router
  ) {
    this.app = express();
  }

  start(): Promise<void> {
    this.setupRoutes();
    this.app.listen(this.port, this.host, () => {
      console.log("Example app listening on port " + this.port);
    });

    return Promise.resolve();
  }

  private setupRoutes(): void {
    this.app.use(this.healthCheckRouter);
  }
}
