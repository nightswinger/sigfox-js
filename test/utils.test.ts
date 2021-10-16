import { btoa } from "../src/utils";

describe("utils", () => {
  describe("btoa", () => {
    it("returns a base64 encoded ascii string", () => {
      let input = "Hello World!";
      expect(btoa(input)).toEqual("SGVsbG8gV29ybGQh");
    });
  });
});
