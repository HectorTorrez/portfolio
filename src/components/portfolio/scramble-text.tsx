import { useEffect, useMemo, useRef } from "react";

type ScrambleTextProps = {
	/** Single phrase to reveal. */
	text?: string;
	/** Phrases to cycle through on hover. Takes precedence over `text`. */
	phrases?: string[];
	className?: string;
};

const CHARS = "!<>-_\\/[]{}=+*^?#§$%";

type QueueItem = {
	from: string;
	to: string;
	start: number;
	end: number;
	char?: string;
};

function prefersReducedMotion(): boolean {
	return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function escapeHtml(value: string): string {
	return value
		.replaceAll("&", "&amp;")
		.replaceAll("<", "&lt;")
		.replaceAll(">", "&gt;")
		.replaceAll('"', "&quot;");
}

export function ScrambleText({
	text,
	phrases,
	className = "",
}: ScrambleTextProps) {
	const list = useMemo(
		() => (phrases && phrases.length > 0 ? phrases : [text ?? ""]),
		[phrases, text],
	);
	const elRef = useRef<HTMLSpanElement>(null);
	const frame = useRef(0);
	const raf = useRef<number | undefined>(undefined);
	const queue = useRef<QueueItem[]>([]);
	const index = useRef(0);
	const listRef = useRef(list);
	listRef.current = list;

	useEffect(() => {
		const el = elRef.current;
		if (!el) return;

		const initial = listRef.current[0] ?? "";

		const update = () => {
			let output = "";
			let complete = 0;

			for (const item of queue.current) {
				if (frame.current >= item.end) {
					complete++;
					output += escapeHtml(item.to);
				} else if (frame.current >= item.start) {
					if (!item.char || Math.random() < 0.28) {
						item.char = CHARS[Math.floor(Math.random() * CHARS.length)];
					}
					output += `<span class="text-text-muted/70">${escapeHtml(item.char)}</span>`;
				} else {
					output += escapeHtml(item.from);
				}
			}

			el.innerHTML = output;

			if (complete !== queue.current.length) {
				frame.current++;
				raf.current = requestAnimationFrame(update);
			}
		};

		const setText = (newText: string) => {
			const oldText = el.textContent || "";
			const length = Math.max(oldText.length, newText.length);
			const next: QueueItem[] = [];

			for (let i = 0; i < length; i++) {
				const start = Math.floor(Math.random() * 30);
				next.push({
					from: oldText[i] || "",
					to: newText[i] || "",
					start,
					end: start + Math.floor(Math.random() * 30),
				});
			}

			queue.current = next;
			if (raf.current) cancelAnimationFrame(raf.current);
			frame.current = 0;
			update();
		};

		const onEnter = () => {
			if (prefersReducedMotion()) return;
			const phrasesList = listRef.current;
			index.current = (index.current + 1) % phrasesList.length;
			setText(phrasesList[index.current] ?? initial);
		};

		if (prefersReducedMotion()) {
			el.textContent = initial;
			return;
		}

		el.addEventListener("mouseenter", onEnter);

		const io = new IntersectionObserver(
			(entries, obs) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						setText(initial);
						obs.disconnect();
					}
				}
			},
			{ threshold: 0.6 },
		);

		io.observe(el);

		return () => {
			el.removeEventListener("mouseenter", onEnter);
			io.disconnect();
			if (raf.current) cancelAnimationFrame(raf.current);
		};
	}, []);

	return (
		<span
			ref={elRef}
			className={`inline-block cursor-default select-none ${className}`}
			aria-hidden="true"
		>
			{list[0]}
		</span>
	);
}
