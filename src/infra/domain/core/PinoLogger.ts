import { CreationParams, Logger } from "@domain/core";
import pino from "pino";

export class PinoLogger implements Logger {
  private readonly logger: pino.Logger;

  constructor(pinoInstance: pino.Logger) {
    this.logger = pinoInstance;
  }
  
  fatal(obj: any, ...args: any[]): void {
    this.logger.fatal(obj, ...args);
  }
  error(obj: any, ...args: any[]): void {
    this.logger.error(obj, ...args);
  }
  warn(obj: any, ...args: any[]): void {
    this.logger.warn(obj, ...args);
  }
  info(obj: any, ...args: any[]): void {
    this.logger.info(obj, ...args);
  }
  debug(obj: any, ...args: any[]): void {
    this.logger.debug(obj, ...args);
  }
  trace(obj: any, ...args: any[]): void {
    this.logger.trace(obj, ...args);
  }

  child(params: CreationParams): Logger {
    return new PinoLogger(this.logger.child({ ...params }));
  }
}
