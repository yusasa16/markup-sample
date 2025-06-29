# Markup Sample

このリポジトリは、マークアップエンジニア [yusasa16](https://github.com/yusasa16) のサンプルコード置き場です。
日々の学習や技術検証で作成したコードをまとめています。

## ✨ 使用技術

このプロジェクトでは、以下の技術を使用しています。

### メイン

- **[Astro](https://astro.build/)**: コンテンツ駆動の高速なウェブサイトを構築するためのフレームワーク。
- **[TypeScript](https://www.typescriptlang.org/)**: JavaScriptに静的型付けを追加した言語。

### スタイリング

- **[kiso.css](https://tak-dcxi.github.io/kiso.css/)**: モダンブラウザ向けの軽量なリセットCSS。
- **[PostCSS](https://postcss.org/)**: CSSをJavaScriptで変換するためのツール。
- **[Stylelint](https://stylelint.io/)**: CSSのリンター。

### コード品質

- **[ESLint](https://eslint.org/)**: JavaScript/TypeScriptのリンター。
- **[Prettier](https://prettier.io/)**: コードフォーマッター。

### テスト

- **[Vitest](https://vitest.dev/)**: Viteベースの高速なユニットテストフレームワーク。
- **[Playwright](https://playwright.dev/)**: モダンなWebアプリのためのE2Eテストフレームワーク。
- **[@axe-core/playwright](https://github.com/dequelabs/axe-core-npm/blob/develop/packages/playwright/README.md)**: Playwrightと連携してアクセシビリティテストを実施します。

### その他

- **[Commitizen](https://github.com/commitizen/cz-cli)**: Conventional Commitsに準拠したコミットメッセージの作成をサポートします。

## 🚀 ディレクトリ構成

主要なディレクトリとファイルは以下の通りです。

```text
/
├── public/              # 静的アセット（画像、フォントなど）
├── src/
│   ├── components/      # 再利用可能なAstroコンポーネント
│   ├── pages/           # ページのコンポーネント
│   └── styles/          # スタイルシート
└── tests/               # PlaywrightによるE2Eテストコード
```

## 🧞 コマンド

プロジェクトのルートディレクトリで以下のコマンドを実行できます。

| Command             | Action                                                              |
| :------------------ | :------------------------------------------------------------------ |
| `npm install`       | 依存関係をインストールします。                                      |
| `npm run dev`       | 開発サーバーを `localhost:4321` で起動します。                      |
| `npm run build`     | プロダクション用にサイトをビルドします。                            |
| `npm run preview`   | ビルドしたサイトをローカルでプレビューします。                      |
| `npm run lint`      | すべてのリンター（ESLint, Prettier, Stylelint）を実行します。       |
| `npm run format`    | すべてのフォーマッター（ESLint, Prettier, Stylelint）を実行します。 |
| `npm run test`      | すべてのテスト（ユニットテスト, E2Eテスト）を実行します。           |
| `npm run test:unit` | Vitestによるユニットテストを実行します。                            |
| `npm run test:e2e`  | PlaywrightによるE2Eテストを実行します。                             |
| `npm run commit`    | Commitizenを使用してコミットメッセージを作成します。                |
