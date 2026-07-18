type SectionHeadingProps = {
	id: string;
	children: React.ReactNode;
	description?: string;
};

export function SectionHeading({
	id,
	children,
	description,
}: SectionHeadingProps) {
	return (
		<div>
			<h2 id={id} className="editorial-label">
				{children}
			</h2>
			{description ? (
				<p className="mt-2 text-sm text-text-muted">{description}</p>
			) : null}
		</div>
	);
}
