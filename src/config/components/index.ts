import { asClass, asValue, createContainer, InjectionMode } from "awilix";
import { ExpressServer } from "@infra/server/web";
import config from "@config";

const components = {
  default: {
    server: asClass(ExpressServer),
    config: asValue(config),
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
