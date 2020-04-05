import config from "@config";
import { PinoLogger } from "@infra/domain/core";
import { ExpressServer } from "@infra/web";
import { HealthCheckRouter } from "@infra/web/routes/healthcheck";
import { asClass, asFunction, asValue, AwilixContainer } from "awilix";
import pino from "pino";

export function registerDefaultContainer(container: AwilixContainer) {
  // logger
  container.register({
    logger: asClass(PinoLogger).singleton(),
    pinoInstance: asValue(pino()),
  });

  // app
  container.register({
    app: asClass(ExpressServer)
      .singleton()
      .inject(() => ({
        host: config.host,
        port: config.port,
      })),
  });

  // HealthCheck
  container.register({
    healthCheckRouter: asFunction(HealthCheckRouter).singleton(),
  });
}
