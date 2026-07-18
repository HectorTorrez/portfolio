import type { ExperienceEntry } from "#/content/types";

export function ExperienceJob({ job }: { job: ExperienceEntry }) {
	return (
		<article>
			<header className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
				<div>
					<h3 className="font-medium text-base text-text-primary md:text-lg">
						{job.role}
					</h3>
					<p className="mt-0.5 text-sm text-text-muted">
						{job.company}
						{job.location ? (
							<>
								<span className="text-text-faint"> · </span>
								{job.location}
							</>
						) : null}
					</p>
				</div>
				<p className="shrink-0 text-text-faint text-sm tabular-nums">
					<time dateTime={job.start}>{job.start}</time>
					{" — "}
					<time dateTime={job.end}>{job.end}</time>
				</p>
			</header>
			<ul className="mt-4 list-disc space-y-2 pl-5 marker:text-text-faint">
				{job.highlights.map((item) => (
					<li
						key={item}
						className="text-pretty text-sm text-text-muted leading-relaxed"
					>
						{item}
					</li>
				))}
			</ul>
		</article>
	);
}
