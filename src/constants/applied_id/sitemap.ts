export interface SitemapItem {
	label: string;
	href: string;
	children?: {
		label: string;
		href: string;
	}[];
}

const sitemap: SitemapItem[] = [
	{
		label: "コース一覧",
		href: "__URL__",
		children: [
			{
				label: "スタンダードプラン",
				href: "__URL__",
			},
			{
				label: "プレミアムプラン",
				href: "__URL__",
			},
			{
				label: "短期集中プラン",
				href: "__URL__",
			},
			{
				label: "日常英会話コース",
				href: "__URL__",
			},
			{
				label: "ビジネス英会話コース",
				href: "__URL__",
			},
		],
	},
	{
		label: "講師紹介",
		href: "__URL__",
		children: [
			{
				label: "講師について",
				href: "__URL__",
			},
			{
				label: "講師一覧",
				href: "__URL__",
			},
			{
				label: "講師を探す",
				href: "__URL__",
			},
		],
	},
	{
		label: "会社情報",
		href: "__URL__",
		children: [
			{
				label: "会社概要",
				href: "__URL__",
			},
			{
				label: "採用情報",
				href: "__URL__",
			},
		],
	},
	{
		label: "BBBについて",
		href: "__URL__",
		children: [
			{
				label: "よくあるご質問",
				href: "__URL__",
			},
			{
				label: "ご利用規約",
				href: "__URL__",
			},
			{
				label: "プライバシーポリシー",
				href: "__URL__",
			},
			{
				label: "お問い合わせ",
				href: "__URL__",
			},
		],
	},
];

export default sitemap;
