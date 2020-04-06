import { PinoLogger } from "@infra/domain/core";
import pino from "pino";
import { instance, mock, verify } from "ts-mockito";

describe("PinoLogger", () => {
  let logger: PinoLogger;
  let pinoInstance: pino.Logger;

  beforeEach(() => {
    pinoInstance = mock();
    logger = new PinoLogger(instance(pinoInstance));
  });

  describe("#trace", () => {
    test("should call pino method", () => {
      const msg1 = "test message";
      const msg2 = { msg: "test message", test: "value" };
      logger.trace(msg1);
      logger.trace(msg2);

      verify(pinoInstance.trace(msg1)).called();
      verify(pinoInstance.trace(msg2)).called();
    });
  });
  describe("#fatal", () => {
    test("should call pino method", () => {
      const msg1 = "test message";
      const msg2 = { msg: "test message", test: "value" };
      logger.fatal(msg1);
      logger.fatal(msg2);

      verify(pinoInstance.fatal(msg1)).called();
      verify(pinoInstance.fatal(msg2)).called();
    });
  });
  describe("#info", () => {
    test("should call pino method", () => {
      const msg1 = "test message";
      const msg2 = { msg: "test message", test: "value" };
      logger.info(msg1);
      logger.info(msg2);

      verify(pinoInstance.info(msg1)).called();
      verify(pinoInstance.info(msg2)).called();
    });
  });
  describe("#debug", () => {
    test("should call pino method", () => {
      const msg1 = "test message";
      const msg2 = { msg: "test message", test: "value" };
      logger.debug(msg1);
      logger.debug(msg2);

      verify(pinoInstance.debug(msg1)).called();
      verify(pinoInstance.debug(msg2)).called();
    });
  });
  describe("#warn", () => {
    test("should call pino method", () => {
      const msg1 = "test message";
      const msg2 = { msg: "test message", test: "value" };
      logger.warn(msg1);
      logger.warn(msg2);

      verify(pinoInstance.warn(msg1)).called();
      verify(pinoInstance.warn(msg2)).called();
    });
  });
  describe("#error", () => {
    test("should call pino method", () => {
      const msg1 = "test message";
      const msg2 = { msg: "test message", test: "value" };
      logger.error(msg1);
      logger.error(msg2);

      verify(pinoInstance.error(msg1)).called();
      verify(pinoInstance.error(msg2)).called();
    });
  });
});
