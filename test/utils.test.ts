import { btoa, mixin } from "../src/utils";

describe("utils", () => {
  describe("btoa", () => {
    it("returns a base64 encoded ascii string", () => {
      let input = "Hello World!";
      expect(btoa(input)).toEqual("SGVsbG8gV29ybGQh");
    });
  });

  describe("mixin", () => {
    it("compose mixins into base class", () => {
      class Jumpable {
        jump() {
          return "jump";
        }
      }
      class Base {}

      interface Base extends Jumpable {}

      mixin(Base, [Jumpable]);

      let base = new Base();
      expect(base.jump()).toEqual("jump");
    });
  });
});
