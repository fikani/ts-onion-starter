import { container } from "@config/components";
import { Server } from "http";

export interface App {
  start(): Promise<Server>;
  stop(): Promise<void>;
}

export namespace App {
  export function create(): App {
    return container.resolve<App>("app");
  }
}
