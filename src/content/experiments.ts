export const experimentIds = ["dynamic-island", "signature-card"] as const;

export type ExperimentId = (typeof experimentIds)[number];

export type ExperimentMeta = {
	id: ExperimentId;
};

/** Registry of lab entries — map `id` to a demo component on the experiments page. */
export const experiments: readonly ExperimentMeta[] = [
	{ id: "dynamic-island" },
	{ id: "signature-card" },
];
