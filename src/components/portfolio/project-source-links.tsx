import type { ProjectEntry, ProjectSourceKind } from "#/content/types";

import { focusRing } from "./focus-ring";
import { useLocaleContent } from "./locale-context";

export function ProjectSourceLinks({ project }: { project: ProjectEntry }) {
	const { ui } = useLocaleContent();
	const sources = project.sources ?? [];
	const labels: Record<ProjectSourceKind, string> = {
		source: ui.projects.source,
		frontend: ui.projects.frontend,
		backend: ui.projects.backend,
	};

	return (
		<>
			{sources.map((source) => (
				<li key={source.href}>
					<a
						href={source.href}
						target="_blank"
						rel="noopener noreferrer"
						className={`editorial-link group inline-flex min-h-11 items-center gap-1.5 text-text-muted ${focusRing}`}
					>
						{labels[source.kind]}
						<span
							aria-hidden
							className="text-text-faint text-sm transition-colors duration-150 ease-out group-hover:text-text-primary"
						>
							↗
						</span>
						<span className="sr-only"> {ui.a11y.opensInNewTab}</span>
					</a>
				</li>
			))}
		</>
	);
}
