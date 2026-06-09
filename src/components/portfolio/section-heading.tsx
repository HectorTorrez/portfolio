type SectionHeadingProps = {
	index: string;
	id: string;
	children: React.ReactNode;
};

export function SectionHeading({ index, id, children }: SectionHeadingProps) {
	return (
		<div className="section-heading flex items-end gap-5">
			<span
				aria-hidden
				className="font-display font-bold text-4xl text-accent-highlight/15 leading-none tabular-nums md:text-5xl"
			>
				{index}
			</span>
			<h2
				id={id}
				className="font-display text-balance font-bold text-2xl text-text-primary tracking-tight md:text-3xl"
			>
				{children}
			</h2>
		</div>
	);
}
