import { divide } from "@/services/divider";

describe("divider", () => {
  test("it should works", () => {
    expect(divide(5, 2)).toEqual(2.5);
  });
});
