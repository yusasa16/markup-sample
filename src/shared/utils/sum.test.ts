import { describe, it, expect } from "vitest";
import { sum, sumArray } from "./sum";

describe("sum", () => {
	it("1 + 1 = 2", () => {
		expect(sum(1, 1)).toBe(2);
	});

	it("二つの数値を正しく足し算する", () => {
		expect(sum(2, 3)).toBe(5);
		expect(sum(10, 20)).toBe(30);
	});

	it("負の数値も正しく処理する", () => {
		expect(sum(-1, 1)).toBe(0);
		expect(sum(-5, -3)).toBe(-8);
	});

	it("小数点も正しく処理する", () => {
		expect(sum(0.1, 0.2)).toBeCloseTo(0.3);
	});
});

describe("sumArray", () => {
	it("配列の数値を全て足し算する", () => {
		expect(sumArray([1, 2, 3])).toBe(6);
		expect(sumArray([10, 20, 30])).toBe(60);
	});

	it("空の配列は0を返す", () => {
		expect(sumArray([])).toBe(0);
	});

	it("単一の要素の配列はその値を返す", () => {
		expect(sumArray([5])).toBe(5);
	});
});
