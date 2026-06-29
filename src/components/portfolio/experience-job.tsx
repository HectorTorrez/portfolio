import type { ExperienceEntry } from "#/content/portfolio";

export function ExperienceJob({ job }: { job: ExperienceEntry }) {
	return (
		<article className="relative border-accent-highlight/20 border-l-2 pl-6 md:pl-8">
			<div
				aria-hidden
				className="absolute top-2 left-0 size-2.5 -translate-x-[calc(50%+1px)] rounded-full bg-accent-highlight ring-4 ring-surface-raised"
			/>
			<header className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
				<div>
					<h3 className="font-display font-semibold text-lg text-text-primary md:text-xl">
						{job.company}
					</h3>
					<p className="mt-1 font-medium text-sm text-text-muted md:text-base">
						{job.role}
					</p>
					{job.location ? (
						<p className="mt-1 text-text-faint text-sm">{job.location}</p>
					) : null}
				</div>
				<p className="mt-2 shrink-0 text-text-faint text-sm tabular-nums md:mt-0">
					<time dateTime={job.start}>{job.start}</time>
					{" — "}
					<time dateTime={job.end}>{job.end}</time>
				</p>
			</header>
			<ul className="mt-6 list-disc space-y-3 pl-5 text-text-muted marker:text-text-faint">
				{job.highlights.map((item) => (
					<li key={item} className="text-pretty leading-relaxed">
						{item}
					</li>
				))}
			</ul>
		</article>
	);
}
