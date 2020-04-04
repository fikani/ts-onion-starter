import config from "@config";
import { AwilixContainer } from "awilix";

export function registerDevContainer(container: AwilixContainer) {
  if (config.env === "dev") {
    container.register({});
  }
}
