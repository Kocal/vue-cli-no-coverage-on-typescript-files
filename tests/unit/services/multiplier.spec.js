import { multiply } from "@/services/multiplier";

describe("multiplier", () => {
  test("it should works", () => {
    expect(multiply(5, 2)).toEqual(10);
  });
});
