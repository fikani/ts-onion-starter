// config.js
require("dotenv").config();
import convict from "convict";

const defaultConfig = convict({
  env: {
    format: ["prod", "dev"],
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

const env = defaultConfig.get("env");
defaultConfig.loadFile(`./src/config/${env}.json`);
defaultConfig.validate({ allowed: "strict" }); // throws error if config does not conform to schema

const config = defaultConfig.getProperties();
export default config; // so we can operate with a plain old JavaScript
export type AppConfig = typeof config;
