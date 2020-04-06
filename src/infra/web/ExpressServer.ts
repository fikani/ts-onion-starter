import { Logger } from "@domain/core";
import { App } from "@infra/index";
import express, { Express, Router } from "express";
import { Server } from "http";

export class ExpressServer implements App {
  public readonly express: Express;
  private server?: Server;

  constructor(
    private readonly port: number,
    private readonly host: string,
    private readonly healthCheckRouter: Router,
    private readonly logger: Logger
  ) {
    this.express = express();
  }
  stop(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.server?.close((err) => {
        if (err) reject(err);
        resolve();
      }) ?? resolve();
    });
  }

  start(): Promise<Server> {
    return new Promise((resolve) => {
      this.setupRoutes();
      this.server = this.express.listen(this.port, this.host, () => {
        this.logger.info("server started" + this.port);
        resolve(this.server);
      });
    });
  }

  private setupRoutes(): void {
    this.express.use(this.healthCheckRouter);
  }
}
