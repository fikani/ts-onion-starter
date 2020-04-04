export interface Logger {
  fatal: LoggerFunc;
  error: LoggerFunc;
  warn: LoggerFunc;
  info: LoggerFunc;
  debug: LoggerFunc;
  trace: LoggerFunc;
  child(params: CreationParams): Logger;
}

export interface LoggerFunc {
  (msg: string, ...args: any[]): void;
  (obj: object, msg?: string, ...args: any[]): void;
}

export interface CreationParams {
  name: string;
}
