import type { ReactNode } from "react";

type MarkdownBlock =
	| { type: "h2"; text: string }
	| { type: "h3"; text: string }
	| { type: "p"; text: string };

/**
 * Minimal markdown → React nodes for case studies (paragraphs, h2, h3).
 * Avoids third-party SSR/optimizer issues on Cloudflare Workers.
 */
export function markdownToNodes(markdown: string): ReactNode[] {
	return parseMarkdownBlocks(markdown).map((block, index) => {
		const key = `${block.type}-${index}`;
		if (block.type === "h2") {
			return <h2 key={key}>{block.text}</h2>;
		}
		if (block.type === "h3") {
			return <h3 key={key}>{block.text}</h3>;
		}
		return <p key={key}>{block.text}</p>;
	});
}

function parseMarkdownBlocks(markdown: string): MarkdownBlock[] {
	const blocks = markdown.trim().split(/\n{2,}/);
	const result: MarkdownBlock[] = [];

	for (const block of blocks) {
		const lines = block.split("\n").map((line) => line.trimEnd());
		const first = lines[0] ?? "";

		if (first.startsWith("### ")) {
			result.push({ type: "h3", text: first.slice(4) });
			const rest = lines.slice(1).join(" ").trim();
			if (rest) {
				result.push({ type: "p", text: rest });
			}
			continue;
		}

		if (first.startsWith("## ")) {
			result.push({ type: "h2", text: first.slice(3) });
			const rest = lines.slice(1).join(" ").trim();
			if (rest) {
				result.push({ type: "p", text: rest });
			}
			continue;
		}

		const text = lines.join(" ").trim();
		if (text) {
			result.push({ type: "p", text });
		}
	}

	return result;
}
