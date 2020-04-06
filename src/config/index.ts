// config.js

import { defaultConfig } from "@config/default";

const env = defaultConfig.get("env");
console.log(`${__dirname}/${env}.json`)
defaultConfig.loadFile(`${__dirname}/${env}.json`);
defaultConfig.validate({ allowed: "strict" }); // throws error if config does not conform to schema

const config = defaultConfig.getProperties();
export default config; // so we can operate with a plain old JavaScript
export type AppConfig = typeof config;
