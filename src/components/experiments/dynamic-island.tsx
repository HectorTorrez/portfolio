import {
	AnimatePresence,
	MotionConfig,
	motion,
	useReducedMotion,
} from "motion/react";
import { type ReactNode, useEffect, useId, useState } from "react";

import { focusRing } from "#/components/portfolio/focus-ring";
import { useLocaleContent } from "#/components/portfolio/locale-context";

type Track = {
	id: string;
	title: string;
	artist: string;
	gradient: string;
	initial: string;
};

const TRACKS: readonly Track[] = [
	{
		id: "midnight-transit",
		title: "Midnight Transit",
		artist: "Signal Path",
		gradient: "linear-gradient(145deg, #5b4636 0%, #1c1410 48%, #c4a574 130%)",
		initial: "M",
	},
	{
		id: "glass-harbor",
		title: "Glass Harbor",
		artist: "North Line",
		gradient: "linear-gradient(160deg, #2a4a5c 0%, #0f1a22 50%, #7eb8c9 140%)",
		initial: "G",
	},
	{
		id: "soft-static",
		title: "Soft Static",
		artist: "Room Tone",
		gradient: "linear-gradient(135deg, #4a3d55 0%, #16121c 45%, #d4a5c0 130%)",
		initial: "S",
	},
];

/** Compact / expanded sizes — height is critically damped (no elastic overshoot). */
const COMPACT = { width: 168, height: 36, radius: 20 } as const;
const EXPANDED = { width: 340, height: 148, radius: 36 } as const;

const sizeTransition = {
	width: { type: "spring" as const, stiffness: 420, damping: 38, mass: 0.85 },
	height: { type: "spring" as const, stiffness: 420, damping: 40, mass: 0.9 },
	borderRadius: {
		type: "spring" as const,
		stiffness: 420,
		damping: 40,
		mass: 0.9,
	},
};

/** Project `--ease-out` — stronger than built-in ease-out. */
const easeOut = [0.23, 1, 0.32, 1] as const;

const fadeTransition = {
	duration: 0.16,
	ease: easeOut,
};

const contentEnter = {
	opacity: 1,
	filter: "blur(0px)",
};

function contentExit(blur: boolean) {
	return {
		opacity: 0,
		filter: blur ? "blur(2px)" : "blur(0px)",
	};
}

const appleUi =
	"[font-family:-apple-system,BlinkMacSystemFont,'SF_Pro_Text',system-ui,sans-serif]";

function Equalizer({
	playing,
	reduceMotion,
	size = "sm",
}: {
	playing: boolean;
	reduceMotion: boolean;
	size?: "sm" | "md";
}) {
	const bars = [
		{ id: "a", scale: 0.4 },
		{ id: "b", scale: 1 },
		{ id: "c", scale: 0.62 },
		{ id: "d", scale: 0.88 },
	] as const;
	const height = size === "sm" ? "h-3" : "h-[15px]";
	const width = size === "sm" ? "w-[2.5px]" : "w-[3px]";

	return (
		<div className={`flex ${height} items-end gap-[2.5px]`} aria-hidden>
			{bars.map((bar, index) => (
				<span
					key={bar.id}
					className={`${width} origin-bottom rounded-full bg-[#30d158]`}
					style={{
						height: `${bar.scale * 100}%`,
						animation:
							playing && !reduceMotion
								? `island-eq ${0.4 + index * 0.07}s ease-in-out infinite alternate`
								: undefined,
						animationDelay: `${index * 55}ms`,
						opacity: playing ? 1 : 0.35,
						transform: playing
							? undefined
							: `scaleY(${0.28 + bar.scale * 0.22})`,
					}}
				/>
			))}
		</div>
	);
}

function AlbumArt({
	track,
	size,
}: {
	track: Track;
	size: "compact" | "expanded";
}) {
	const dim = size === "compact" ? "size-5" : "size-14";
	const radius = size === "compact" ? "rounded-[5px]" : "rounded-[14px]";

	return (
		<div
			className={`${dim} ${radius} shrink-0 overflow-hidden`}
			style={{ background: track.gradient }}
			aria-hidden
		>
			<div className="flex size-full items-center justify-center font-semibold text-white/90 tracking-tight">
				<span className={size === "compact" ? "text-[9px]" : "text-xl"}>
					{track.initial}
				</span>
			</div>
		</div>
	);
}

function DecorativeIcon({
	className,
	children,
}: {
	className?: string;
	children: ReactNode;
}) {
	return (
		// biome-ignore lint/a11y/noSvgWithoutTitle: parent button provides the label
		<svg
			className={className}
			viewBox="0 0 24 24"
			fill="currentColor"
			aria-hidden
			focusable="false"
		>
			{children}
		</svg>
	);
}

export function DynamicIsland() {
	const { ui } = useLocaleContent();
	const labels = ui.experiments.dynamicIsland;
	const reduceMotion = useReducedMotion() ?? false;
	const labelId = useId();
	const [expanded, setExpanded] = useState(false);
	const [playing, setPlaying] = useState(true);
	const [trackIndex, setTrackIndex] = useState(0);
	const track = TRACKS[trackIndex] ?? TRACKS[0];

	useEffect(() => {
		if (!expanded) return;

		const onKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				setExpanded(false);
			}
		};

		window.addEventListener("keydown", onKeyDown);
		return () => window.removeEventListener("keydown", onKeyDown);
	}, [expanded]);

	const go = (delta: number) => {
		setTrackIndex(
			(current) => (current + delta + TRACKS.length) % TRACKS.length,
		);
		setPlaying(true);
	};

	const size = expanded ? EXPANDED : COMPACT;
	const transition = reduceMotion ? { duration: 0.01 } : sizeTransition;
	const fade = reduceMotion ? { duration: 0.01 } : fadeTransition;
	const exit = contentExit(!reduceMotion);

	return (
		<MotionConfig reducedMotion="user">
			<style>
				{`
          @keyframes island-eq {
            from { transform: scaleY(0.25); }
            to { transform: scaleY(1); }
          }
          @media (prefers-reduced-motion: reduce) {
            @keyframes island-eq {
              from, to { transform: scaleY(0.65); }
            }
          }
        `}
			</style>

			<div className="relative flex min-h-56 items-start justify-center px-4 pt-10 pb-12 sm:min-h-60 sm:pt-12">
				<p id={labelId} className="sr-only">
					{labels.nowPlaying(track.title, track.artist)}
				</p>

				{expanded ? (
					<button
						type="button"
						aria-label={labels.collapse}
						className="absolute inset-0 z-0 cursor-default"
						onClick={() => setExpanded(false)}
					/>
				) : null}

				{/*
				  Explicit width/height animation — no layout morph.
				  Height spring is overdamped (high damping) so it never rubber-bands.
				*/}
				<motion.div
					className={`relative z-10 overflow-hidden bg-black text-white shadow-[0_12px_40px_rgb(0_0_0_/0.28)] ${appleUi}`}
					initial={false}
					animate={{
						width: size.width,
						height: size.height,
						borderRadius: size.radius,
					}}
					transition={transition}
					aria-labelledby={labelId}
				>
					{/*
					  Sync (overlapping) presence — absolute layers so size + content
					  stay in sync; blur masks the crossfade.
					*/}
					<AnimatePresence initial={false}>
						{expanded ? (
							<motion.div
								key="expanded"
								initial={exit}
								animate={contentEnter}
								exit={exit}
								transition={fade}
								className="absolute inset-0 flex flex-col px-3.5 pt-3.5 pb-3"
							>
								<button
									type="button"
									onClick={() => setExpanded(false)}
									aria-label={labels.collapse}
									className={`absolute inset-x-0 top-0 z-10 h-8 cursor-pointer ${focusRing}`}
								/>

								<div className="flex items-center gap-2.5">
									<AlbumArt track={track} size="expanded" />
									<div className="min-w-0 flex-1">
										<p className="truncate font-semibold text-[15px] leading-[1.15] tracking-[-0.015em]">
											{track.title}
										</p>
										<p className="mt-0.5 truncate text-[13px] text-white/50 leading-[1.15]">
											{track.artist}
										</p>
									</div>
									<Equalizer
										playing={playing}
										reduceMotion={reduceMotion}
										size="md"
									/>
								</div>

								<div className="mt-auto flex items-center justify-between px-5 pb-0.5">
									<button
										type="button"
										onClick={() => go(-1)}
										aria-label={labels.previous}
										className={`pressable inline-flex size-10 items-center justify-center text-white ${focusRing}`}
									>
										<DecorativeIcon className="size-6">
											<path d="M6 6h2.2v12H6V6Zm3.1 6 9.9 6.2V5.8L9.1 12Z" />
										</DecorativeIcon>
									</button>
									<button
										type="button"
										onClick={() => setPlaying((value) => !value)}
										aria-label={playing ? labels.pause : labels.play}
										className={`pressable inline-flex size-10 items-center justify-center text-white ${focusRing}`}
									>
										{playing ? (
											<DecorativeIcon className="size-7">
												<path d="M7 5.5h3.4v13H7v-13Zm6.6 0H17v13h-3.4v-13Z" />
											</DecorativeIcon>
										) : (
											<DecorativeIcon className="size-7">
												<path d="M8 5.5v13l11-6.5L8 5.5Z" />
											</DecorativeIcon>
										)}
									</button>
									<button
										type="button"
										onClick={() => go(1)}
										aria-label={labels.next}
										className={`pressable inline-flex size-10 items-center justify-center text-white ${focusRing}`}
									>
										<DecorativeIcon className="size-6">
											<path d="M15.8 6H18v12h-2.2V6ZM5 5.8v12.4L14.9 12 5 5.8Z" />
										</DecorativeIcon>
									</button>
								</div>
							</motion.div>
						) : (
							<motion.button
								key="compact"
								type="button"
								initial={exit}
								animate={contentEnter}
								exit={exit}
								transition={fade}
								onClick={() => setExpanded(true)}
								aria-label={labels.expand}
								aria-expanded={false}
								className={`pressable absolute inset-0 flex cursor-pointer items-center justify-between px-2.5 ${focusRing}`}
							>
								<AlbumArt track={track} size="compact" />
								<Equalizer
									playing={playing}
									reduceMotion={reduceMotion}
									size="sm"
								/>
							</motion.button>
						)}
					</AnimatePresence>
				</motion.div>
			</div>
		</MotionConfig>
	);
}
