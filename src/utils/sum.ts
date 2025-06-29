/**
 * 二つの数値を足し算する
 */
export function sum(a: number, b: number): number {
	return a + b;
}

/**
 * 配列の数値を全て足し算する
 */
export function sumArray(numbers: number[]): number {
	return numbers.reduce((total, num) => total + num, 0);
}
