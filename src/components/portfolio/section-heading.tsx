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
			<h2
				id={id}
				className="font-medium text-2xl tracking-tight text-text-primary"
			>
				{children}
			</h2>
			{description ? (
				<p className="mt-3 max-w-xs text-sm text-text-muted leading-relaxed">
					{description}
				</p>
			) : null}
		</div>
	);
}
