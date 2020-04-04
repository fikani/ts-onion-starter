import { CreationParams, Logger } from "@domain/core";
import pino from "pino";

export class PinoLogger implements Logger {
  private readonly logger!: pino.Logger;

  constructor(instance?: pino.Logger) {
    this.logger = instance || pino();
  }

  fatal = this.logger.fatal;
  error = this.logger.error;
  warn = this.logger.warn;
  info = this.logger.info;
  debug = this.logger.debug;
  trace = this.logger.trace;

  child(params: CreationParams): Logger {
    return new PinoLogger(this.logger.child({ ...params }));
  }
}
