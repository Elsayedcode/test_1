import { add } from "..";
import { describe, it, expect } from "vitest";

describe("add function", () => {
  it("should return the sum of two positive numbers", () => {
    expect(add(2, 3)).toBe(5);
  });

  it("should return the sum of a positive and a negative number", () => {
    expect(add(2, -3)).toBe(-1);
  });

  it("should return the sum of two negative numbers", () => {
    expect(add(-2, -3)).toBe(-5);
  });

  it("should return the sum of a number and zero", () => {
    expect(add(2, 0)).toBe(2);
  });

  it("should return the sum of two decimal numbers", () => {
    expect(add(0.1, 0.2)).toBeCloseTo(0.3);
  });
});

