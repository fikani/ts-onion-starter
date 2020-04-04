import { Router } from "express";

export function HealthCheckRouter() {
  return Router().get("/healthcheck", (req, res, next) => {
    res.status(200).json({});
  });
}
