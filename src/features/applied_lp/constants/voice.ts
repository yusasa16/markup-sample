export type Voice = {
	name: string;
	job: string;
	text: string[];
	image: string;
};

const voices: Voice[] = [
	{
		name: "○○○さん",
		job: "大学生",
		text: [
			"テキストテキストテキストテキストテキストテキストテキストテキストテキスト",
			"テキストテキストテキストテキストテキストテキストテキストテキストテキスト",
		],
		image: "https://placehold.co/120x120",
	},
	{
		name: "○○○さん",
		job: "会社員",
		text: [
			"テキストテキストテキストテキストテキストテキストテキストテキストテキスト",
			"テキストテキストテキストテキストテキストテキストテキストテキストテキスト",
		],
		image: "https://placehold.co/120x120",
	},
	{
		name: "○○○さん",
		job: "自営業",
		text: [
			"テキストテキストテキストテキストテキストテキストテキストテキストテキスト",
			"テキストテキストテキストテキストテキストテキストテキストテキストテキスト",
		],
		image: "https://placehold.co/120x120",
	},
];

export default voices;
