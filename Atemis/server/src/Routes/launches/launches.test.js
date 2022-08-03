const request = require("supertest");
const app = require("../../app");

describe("Test Get /launches", () => {
  test("it should respond with status code 200", async () => {
    const response = await request(app)
      .get("/launches")
      .expect("Content-Type", /json/)
      .expect(200);
  });
});

describe("Test Post /launches", () => {
  const completeLaunchData = {
    mission: "Zero SSH Enterprise",
    rocket: "Zero SSH-12UI",
    target: "Kepler-186 f",
    launchDate: "june 20 2024",
  };

  const launchDataWithoutDate = {
    mission: "Zero SSH Enterprise",
    rocket: "Zero SSH-12UI",
    target: "Kepler-186 f",
  };

  test("it should respond with status code 201 created", async () => {
    const response = await request(app)
      .post("/launches")
      .send(completeLaunchData)
      .expect("Content-Type", /json/)
      .expect(201);

    const requestDate = new Date(completeLaunchData.launchDate).valueOf();
    const responseDate = new Date(response.body.launchDate).valueOf();
    expect(responseDate).toBe(requestDate);

    expect(response.body).toMatchObject(launchDataWithoutDate);
  });
  test("it should catch  missing required properties", () => {});
  test("it should catch invalid date", () => {});
});
