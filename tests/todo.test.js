const request = require("supertest");
const app = require("../app");

describe("Todo API", () => {
  it("should create a todo", async () => {
    const res = await request(app)
      .post("/todos")
      .send({ title: "Learn Railway" });

    expect(res.statusCode).toBe(201);
    expect(res.body.title).toBe("Learn Railway");
  });

  it("should get todos", async () => {
    const res = await request(app).get("/todos");
    expect(res.statusCode).toBe(200);
  });
});
