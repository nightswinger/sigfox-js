import Client from "../src/client";

describe("client", () => {
  it("fails with no username or password", () => {
    expect.assertions(1);
    try {
      new Client({} as any);
    } catch (err) {
      expect(err.message).toEqual("username or password doesn't exist");
    }
  });
});
