import config from "@config";
import { ExpressServer } from "@infra/web";
import { HealthCheckRouter } from "@infra/web/routes/healthcheck";
import { asClass, asFunction, asValue, createContainer, InjectionMode } from "awilix";

const components = {
  default: {
    config: asValue(config),
    app: asClass(ExpressServer),
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
