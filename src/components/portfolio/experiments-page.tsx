import { DynamicIsland } from "#/components/experiments/dynamic-island";
import { SignatureCard } from "#/components/experiments/signature-card";
import { type ExperimentId, experiments } from "#/content/experiments";
import type { Locale } from "#/content/locales";
import type { UiStrings } from "#/content/types";

import { focusRing } from "./focus-ring";
import { LocaleProvider, useLocaleContent } from "./locale-context";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

type ExperimentsPageProps = {
	locale: Locale;
};

function experimentCopy(
	id: ExperimentId,
	items: UiStrings["experiments"]["items"],
) {
	switch (id) {
		case "dynamic-island":
			return items.dynamicIsland;
		case "signature-card":
			return items.signatureCard;
	}
}

function ExperimentDemo({ id }: { id: ExperimentId }) {
	switch (id) {
		case "dynamic-island":
			return <DynamicIsland />;
		case "signature-card":
			return <SignatureCard />;
	}
}

export function ExperimentsPage({ locale }: ExperimentsPageProps) {
	return (
		<LocaleProvider locale={locale}>
			<ExperimentsPageContent />
		</LocaleProvider>
	);
}

function ExperimentsPageContent() {
	const { locale, ui } = useLocaleContent();
	const { experiments: copy } = ui;

	return (
		<div className="min-h-dvh bg-surface-base">
			<a className="skip-link" href="#main-content">
				{ui.skipToContent}
			</a>

			<SiteHeader />

			<main id="main-content" className="overflow-x-hidden">
				<div className="content-column pb-16 pt-10 md:pb-20 md:pt-14">
					<a
						href={`/${locale}`}
						className={`editorial-link inline-flex min-h-11 items-center text-sm text-text-muted ${focusRing}`}
					>
						← {copy.backHome}
					</a>

					<header className="mt-8">
						<p className="editorial-label">{copy.label}</p>
						<h1 className="editorial-display mt-3 text-balance text-3xl text-text-primary sm:text-4xl md:text-[2.75rem]">
							{copy.title}
						</h1>
						<p className="mt-4 max-w-prose text-pretty text-base text-text-muted leading-relaxed md:text-[1.05rem]">
							{copy.blurb}
						</p>
					</header>

					<ul className="stagger-children mt-12 space-y-10 md:mt-14 md:space-y-12">
						{experiments.map((experiment) => {
							const item = experimentCopy(experiment.id, copy.items);

							return (
								<li key={experiment.id}>
									<article>
										<header className="max-w-prose">
											<h2 className="font-medium text-lg text-text-primary tracking-tight md:text-xl">
												{item.title}
											</h2>
											<p className="mt-2 text-pretty text-sm text-text-muted leading-relaxed md:text-[0.95rem]">
												{item.description}
											</p>
										</header>

										<div className="mt-5 overflow-hidden rounded-[1.75rem] border border-border-subtle bg-[radial-gradient(80%_60%_at_50%_0%,rgb(24_24_27_/0.08),transparent_55%),var(--color-surface-raised)]">
											<ExperimentDemo id={experiment.id} />
										</div>
									</article>
								</li>
							);
						})}
					</ul>
				</div>
			</main>

			<SiteFooter />
		</div>
	);
}
