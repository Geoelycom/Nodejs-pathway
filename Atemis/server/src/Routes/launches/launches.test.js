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

  const launchDataWithInvalidDate = {
    mission: "Zero SSH Enterprise",
    rocket: "Zero SSH-12UI",
    target: "Kepler-186 f",
    launchDate: "atsgragagreff",
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
  test("it should catch  missing required properties", async () => {
    const response = await request(app)
      .post("/launches")
      .send(launchDataWithoutDate)
      .expect("Content-Type", /json/)
      .expect(400);

    expect(response.body).toStrictEqual({
      error: "Missing required launch property",
    });
  });
  test("it should catch invalid date", async () => {
    const response = await request(app)
      .post("/launches")
      .send(launchDataWithInvalidDate)
      .expect("Content-Type", /json/)
      .expect(400);

    expect(response.body).toStrictEqual({
      error: "Invalid launch date",
    });
  });
});
