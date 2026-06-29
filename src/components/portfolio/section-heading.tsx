type SectionHeadingProps = {
	id: string;
	children: React.ReactNode;
};

export function SectionHeading({ id, children }: SectionHeadingProps) {
	return (
		<div className="section-heading flex items-end gap-5">
			<h2
				id={id}
				className="font-display text-balance font-bold text-2xl text-text-primary tracking-tight md:text-3xl"
			>
				{children}
			</h2>
		</div>
	);
}
