import HTTPClient from "../src/http";

describe("http", () => {
  const http = new HTTPClient({});

  it("get", async () => {
    const res: any = await http.get("/get");
    expect(res).toEqual({});
  });

  it("post", async () => {
    const res: any = await http.post("/post");
    expect(res).toEqual({});
  });

  it("put", async () => {
    const res: any = await http.put("/put");
    expect(res).toEqual({});
  });

  it("delete", async () => {
    const res: any = await http.delete("/delete");
    expect(res).toEqual({});
  });
});
