import { createServer } from "miragejs";
import fakeData from "./db.json";

const createMockServer = () => {
  createServer({
    routes() {
      this.namespace = "api";

      this.get("/companies", () => fakeData);
    },
  });
};

export default createMockServer;
