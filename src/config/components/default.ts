import config from "@config";
import { ExpressServer } from "@infra/web";
import { HealthCheckRouter } from "@infra/web/routes/healthcheck";
import { asClass, asFunction, AwilixContainer } from "awilix";

export function registerDefaultContainer(container: AwilixContainer) {
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
