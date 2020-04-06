require("dotenv").config();
import convict from "convict";

export const defaultConfig = convict({
  env: {
    format: ["prod", "dev", "test"],
    default: "dev",
    arg: "nodeEnv",
    env: "NODE_ENV",
  },
  port: {
    format: "port",
    default: 8080,
    arg: "port",
    env: "PORT",
  },
  host: {
    format: String,
    default: "0.0.0.0",
    arg: "host",
    env: "HOST",
  },
});
