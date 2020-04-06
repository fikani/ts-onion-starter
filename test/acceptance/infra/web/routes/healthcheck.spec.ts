import { App } from "@infra/App";
import { ExpressServer } from "@infra/web";
import supertest from "supertest";

describe("/healthcheck", () => {
  let app: ExpressServer;

  beforeEach(async () => {
    app = App.create() as ExpressServer;
    await app.start();
  });

  afterEach(async () => {
    await app.stop();
  });

  describe("GET", () => {
    test("it should respond ok", async (done) => {
      const res = await supertest(app.express).get("/healthcheck");
      expect(res.status).toBe(200);
      done();
    });
  });
});
