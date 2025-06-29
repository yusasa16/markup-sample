import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test.describe("アクセシビリティテスト", () => {
	test("01-entry_profileトップページのアクセシビリティをチェック", async ({
		page,
	}) => {
		await page.goto("/01-entry_profile/");

		const accessibilityScanResults = await new AxeBuilder({
			page,
		}).analyze();

		expect(accessibilityScanResults.violations).toEqual([]);
	});
});
