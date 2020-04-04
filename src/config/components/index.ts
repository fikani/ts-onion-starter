import { registerDefaultContainer } from "@config/components/default";
import { registerDevContainer } from "@config/components/dev";
import { createContainer, InjectionMode } from "awilix";

export const container = createContainer({
  injectionMode: InjectionMode.CLASSIC,
});
registerDefaultContainer(container);
registerDevContainer(container)
