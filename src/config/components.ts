import config from "@config";
import { ExpressServer } from "@infra/web";
import { HealthCheckRouter } from "@infra/web/routes/healthcheck";
import { asClass, asFunction, createContainer, InjectionMode } from "awilix";

const components = {
  default: {
    app: asClass(ExpressServer).inject(() => ({
      host: config.host,
      port: config.port,
    })),
    healthCheckRouter: asFunction(HealthCheckRouter).singleton(),
  },
  dev: {},
};

export const container = createContainer({
  injectionMode: InjectionMode.CLASSIC,
});

container.register({
  ...components.default,
  ...("dev" === config.env ? components.dev : {}),
});
