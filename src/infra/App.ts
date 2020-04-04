import { container } from "src/config/components";

export interface App {
  start(): Promise<void>;
}

export namespace App {
  export function create(): App {
    return container.resolve<App>("app");
  }
}