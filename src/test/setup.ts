import "@testing-library/jest-dom";

// グローバルなテスト設定
// eslint-disable-next-line @typescript-eslint/no-explicit-any
(global as any).CSS = {
	supports: () => false,
	escape: (value: string) => value,
};

// Astroコンポーネントで使用されるimport.meta.envのモック
Object.defineProperty(import.meta, "env", {
	value: {
		DEV: true,
		PROD: false,
		SSR: false,
		BASE_URL: "/",
		MODE: "test",
		...process.env,
	},
	writable: true,
});
