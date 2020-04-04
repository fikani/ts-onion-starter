import { container } from "src/config/components";

export interface AppServer {
  start(): Promise<void>;
}

export namespace AppServer {
  export function create(): AppServer {
    return container.resolve<AppServer>("server");
  }
}
