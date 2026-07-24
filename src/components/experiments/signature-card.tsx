import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {
	motion,
	useMotionTemplate,
	useMotionValue,
	useSpring,
} from "motion/react";
import {
	type CSSProperties,
	type HTMLAttributes,
	type PointerEvent as ReactPointerEvent,
	useEffect,
	useId,
	useRef,
	useState,
} from "react";

import { focusRing } from "#/components/portfolio/focus-ring";
import { useLocaleContent } from "#/components/portfolio/locale-context";

gsap.registerPlugin(useGSAP);

const FINE_POINTER = "(hover: hover) and (pointer: fine)";
const TILT_SPRING = { stiffness: 220, damping: 22, mass: 0.85 };

const MAX_NAME = 22;
const MAX_NETWORK = 16;
const MAX_EXPIRY = 5;
const MAX_LAST4 = 4;

type Point = { x: number; y: number };

/**
 * Standard QWERTY key centers in unit space.
 * Rows are staggered like a physical keyboard / swipe-typing plane.
 */
const QWERTY: Record<string, Point> = {
	q: { x: 0, y: 0 },
	w: { x: 1, y: 0 },
	e: { x: 2, y: 0 },
	r: { x: 3, y: 0 },
	t: { x: 4, y: 0 },
	y: { x: 5, y: 0 },
	u: { x: 6, y: 0 },
	i: { x: 7, y: 0 },
	o: { x: 8, y: 0 },
	p: { x: 9, y: 0 },
	a: { x: 0.5, y: 1 },
	s: { x: 1.5, y: 1 },
	d: { x: 2.5, y: 1 },
	f: { x: 3.5, y: 1 },
	g: { x: 4.5, y: 1 },
	h: { x: 5.5, y: 1 },
	j: { x: 6.5, y: 1 },
	k: { x: 7.5, y: 1 },
	l: { x: 8.5, y: 1 },
	z: { x: 1.15, y: 2 },
	x: { x: 2.15, y: 2 },
	c: { x: 3.15, y: 2 },
	v: { x: 4.15, y: 2 },
	b: { x: 5.15, y: 2 },
	n: { x: 6.15, y: 2 },
	m: { x: 7.15, y: 2 },
};

function nameToKeyPoints(name: string): Point[] {
	const points: Point[] = [];

	for (const char of name.toLowerCase()) {
		const key = QWERTY[char];
		if (!key) continue;

		const prev = points[points.length - 1];
		if (prev && prev.x === key.x && prev.y === key.y) {
			points.push({ x: key.x + 0.28, y: key.y - 0.32 });
			points.push({ x: key.x, y: key.y });
			continue;
		}

		points.push({ x: key.x, y: key.y });
	}

	return points;
}

function chaikin(points: readonly Point[], iterations = 2): Point[] {
	if (points.length < 2) return [...points];

	let current = [...points];
	for (let n = 0; n < iterations; n++) {
		const first = current[0];
		const last = current[current.length - 1];
		if (!first || !last) return current;

		const next: Point[] = [first];
		for (let i = 0; i < current.length - 1; i++) {
			const a = current[i];
			const b = current[i + 1];
			if (!a || !b) continue;
			next.push(
				{ x: a.x * 0.75 + b.x * 0.25, y: a.y * 0.75 + b.y * 0.25 },
				{ x: a.x * 0.25 + b.x * 0.75, y: a.y * 0.25 + b.y * 0.75 },
			);
		}
		next.push(last);
		current = next;
	}
	return current;
}

function catmullRomPath(points: readonly Point[], tension = 1): string {
	if (points.length === 0) return "";
	if (points.length === 1) {
		const p = points[0];
		return p ? `M ${p.x} ${p.y}` : "";
	}
	if (points.length === 2) {
		const a = points[0];
		const b = points[1];
		if (!a || !b) return "";
		return `M ${a.x} ${a.y} L ${b.x} ${b.y}`;
	}

	const pts = [points[0], ...points, points[points.length - 1]];
	let d = "";

	for (let i = 1; i < pts.length - 2; i++) {
		const p0 = pts[i - 1];
		const p1 = pts[i];
		const p2 = pts[i + 1];
		const p3 = pts[i + 2];
		if (!p0 || !p1 || !p2 || !p3) continue;

		if (i === 1) d = `M ${p1.x} ${p1.y}`;

		const c1x = p1.x + ((p2.x - p0.x) / 6) * tension;
		const c1y = p1.y + ((p2.y - p0.y) / 6) * tension;
		const c2x = p2.x - ((p3.x - p1.x) / 6) * tension;
		const c2y = p2.y - ((p3.y - p1.y) / 6) * tension;

		d += ` C ${c1x} ${c1y}, ${c2x} ${c2y}, ${p2.x} ${p2.y}`;
	}

	return d;
}

function fitSignaturePath(
	points: readonly Point[],
	frame: { width: number; height: number; pad: number },
): string {
	if (points.length === 0) return "";

	const smoothed = chaikin(points, points.length >= 3 ? 3 : 1);

	let minX = Infinity;
	let maxX = -Infinity;
	let minY = Infinity;
	let maxY = -Infinity;

	for (const p of smoothed) {
		minX = Math.min(minX, p.x);
		maxX = Math.max(maxX, p.x);
		minY = Math.min(minY, p.y);
		maxY = Math.max(maxY, p.y);
	}

	const spanX = Math.max(maxX - minX, 0.9);
	const spanY = Math.max(maxY - minY, 0.9);
	const innerW = frame.width - frame.pad * 2;
	const innerH = frame.height - frame.pad * 2;
	const scale = Math.min(innerW / spanX, innerH / (spanY * 1.05));
	const shear = 0.18;

	const mapped = smoothed.map((p) => {
		const nx = (p.x - minX - spanX / 2) * scale;
		const ny = (p.y - minY - spanY / 2) * scale;
		return {
			x: frame.width / 2 + nx + ny * shear,
			y: frame.height / 2 + ny * 0.88,
		};
	});

	return catmullRomPath(mapped, 1.15);
}

const SIGNATURE_FRAME = { width: 320, height: 96, pad: 16 };

function formatExpiry(raw: string) {
	const digits = raw.replace(/\D/g, "").slice(0, 4);
	if (digits.length <= 2) return digits;
	return `${digits.slice(0, 2)}/${digits.slice(2)}`;
}

function Field({
	id,
	label,
	value,
	onChange,
	placeholder,
	maxLength,
	inputMode,
	autoCapitalize,
}: {
	id: string;
	label: string;
	value: string;
	onChange: (value: string) => void;
	placeholder: string;
	maxLength: number;
	inputMode?: HTMLAttributes<HTMLInputElement>["inputMode"];
	autoCapitalize?: string;
}) {
	return (
		<label htmlFor={id} className="block min-w-0">
			<span className="font-medium text-[0.65rem] text-text-faint uppercase tracking-[0.16em]">
				{label}
			</span>
			<input
				id={id}
				value={value}
				onChange={(event) => onChange(event.target.value.slice(0, maxLength))}
				maxLength={maxLength}
				spellCheck={false}
				autoComplete="off"
				placeholder={placeholder}
				inputMode={inputMode}
				autoCapitalize={autoCapitalize}
				className={`mt-1.5 w-full border-0 border-border-subtle border-b bg-transparent px-0 py-1.5 text-sm text-text-primary outline-none transition-[border-color] placeholder:text-text-faint/50 focus:border-text-primary ${focusRing} rounded-none`}
			/>
		</label>
	);
}

export function SignatureCard() {
	const { ui } = useLocaleContent();
	const labels = ui.experiments.signatureCard;
	const nameId = useId();
	const networkId = useId();
	const expiryId = useId();
	const last4Id = useId();

	const [name, setName] = useState(labels.defaultName);
	const [network, setNetwork] = useState(labels.defaultNetwork);
	const [expiry, setExpiry] = useState(labels.defaultExpiry);
	const [last4, setLast4] = useState(labels.defaultLast4);

	const stageRef = useRef<HTMLDivElement>(null);
	const inkRef = useRef<SVGPathElement>(null);
	const inkSoftRef = useRef<SVGPathElement>(null);
	const reduceMotion = useRef(false);
	const hasDrawn = useRef(false);
	const [finePointer, setFinePointer] = useState(false);

	const rotateX = useMotionValue(0);
	const rotateY = useMotionValue(0);
	const springX = useSpring(rotateX, TILT_SPRING);
	const springY = useSpring(rotateY, TILT_SPRING);
	const cardTransform = useMotionTemplate`perspective(900px) rotateX(${springX}deg) rotateY(${springY}deg)`;

	const path = fitSignaturePath(nameToKeyPoints(name), SIGNATURE_FRAME);
	const hasSignature = path.length > 0;
	const displayName = name.trim().toUpperCase() || labels.namePlaceholder;
	const displayNetwork = network.trim() || labels.networkPlaceholder;
	const displayExpiry = expiry.trim() || "••/••";
	const displayLast4 = last4.replace(/\D/g, "").padStart(4, "•").slice(-4);

	useEffect(() => {
		const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
		const pointerQuery = window.matchMedia(FINE_POINTER);

		const sync = () => {
			reduceMotion.current = motionQuery.matches;
			setFinePointer(pointerQuery.matches && !motionQuery.matches);
			if (motionQuery.matches || !pointerQuery.matches) {
				rotateX.set(0);
				rotateY.set(0);
			}
		};

		sync();
		motionQuery.addEventListener("change", sync);
		pointerQuery.addEventListener("change", sync);
		return () => {
			motionQuery.removeEventListener("change", sync);
			pointerQuery.removeEventListener("change", sync);
		};
	}, [rotateX, rotateY]);

	useGSAP(
		() => {
			const paths = [inkRef.current, inkSoftRef.current].filter(
				(el): el is SVGPathElement => Boolean(el),
			);
			if (paths.length === 0) return;

			if (!hasSignature || reduceMotion.current) {
				for (const el of paths) {
					gsap.set(el, { strokeDasharray: 0, strokeDashoffset: 0, opacity: 1 });
				}
				if (!hasSignature) hasDrawn.current = false;
				return;
			}

			// Live edits update the path instantly; draw once when ink first appears.
			if (hasDrawn.current) {
				for (const el of paths) {
					gsap.killTweensOf(el);
					gsap.set(el, { strokeDasharray: 0, strokeDashoffset: 0, opacity: 1 });
				}
				return;
			}

			hasDrawn.current = true;
			for (const el of paths) {
				const length = el.getTotalLength();
				gsap.fromTo(
					el,
					{ strokeDasharray: length, strokeDashoffset: length, opacity: 1 },
					{
						strokeDashoffset: 0,
						duration: 0.55,
						ease: "power2.out",
						overwrite: true,
					},
				);
			}
		},
		{ dependencies: [path, hasSignature], scope: stageRef },
	);

	const onPointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
		if (!finePointer) return;

		const card = event.currentTarget;
		const rect = card.getBoundingClientRect();
		const px = (event.clientX - rect.left) / rect.width;
		const py = (event.clientY - rect.top) / rect.height;

		rotateY.set((px - 0.5) * 14);
		rotateX.set((0.5 - py) * 10);
	};

	const onPointerLeave = () => {
		if (!finePointer) return;
		// Springs settle to rest — snappier than the old 550ms tween.
		rotateX.set(0);
		rotateY.set(0);
	};

	const cardSurface = {
		aspectRatio: "1.586 / 1",
		transformStyle: "preserve-3d" as const,
		// Solid fallback so white ink stays readable if the gradient fails to parse.
		backgroundColor: "#0c0e13",
		backgroundImage: `
			radial-gradient(110% 80% at 100% -10%, rgb(212 175 55 / 0.18), transparent 42%),
			linear-gradient(155deg, #161a22 0%, #0c0e13 52%, #1c2230 100%)
		`,
	} satisfies CSSProperties;

	return (
		<div
			ref={stageRef}
			className="flex flex-col items-center gap-6 px-4 py-10 sm:gap-7 sm:py-12"
		>
			{/* Preview — not the editor */}
			<div className="w-full max-w-md [perspective:900px]">
				<motion.div
					className="relative w-full overflow-hidden rounded-[1.15rem] shadow-[0_24px_48px_-28px_rgb(0_0_0_/0.65)] ring-1 ring-white/10"
					style={
						finePointer
							? { ...cardSurface, transform: cardTransform }
							: cardSurface
					}
					onPointerMove={finePointer ? onPointerMove : undefined}
					onPointerLeave={finePointer ? onPointerLeave : undefined}
				>
					<div
						className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay"
						style={{
							backgroundImage:
								"url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
						}}
						aria-hidden
					/>

					<div className="relative flex h-full flex-col justify-between p-5 sm:p-6">
						<div className="flex items-start justify-between">
							<svg
								width="40"
								height="30"
								viewBox="0 0 42 32"
								className="drop-shadow-sm"
								aria-hidden
								role="presentation"
							>
								<title>Chip</title>
								<rect
									x="0.5"
									y="0.5"
									width="41"
									height="31"
									rx="5"
									fill="url(#signature-card-chip)"
									stroke="rgb(212 175 55 / 0.4)"
								/>
								<path
									d="M0 10.5h42M0 21.5h42M14 0v32M28 0v32"
									stroke="rgb(120 90 30 / 0.35)"
									strokeWidth="1"
								/>
								<defs>
									<linearGradient
										id="signature-card-chip"
										x1="0"
										y1="0"
										x2="42"
										y2="32"
									>
										<stop stopColor="#e8d5a3" />
										<stop offset="0.5" stopColor="#c4a35a" />
										<stop offset="1" stopColor="#8a6a2f" />
									</linearGradient>
								</defs>
							</svg>
							<span className="font-semibold text-sm text-white/75 tracking-tight">
								{displayNetwork.toLowerCase()}
							</span>
						</div>

						<div className="mt-auto space-y-4">
							<div>
								<p className="mb-1 font-medium text-[0.58rem] text-white/30 uppercase tracking-[0.18em]">
									{labels.signedAs}
								</p>
								<div className="relative h-[4.25rem] sm:h-20">
									<svg
										className="absolute inset-0 size-full"
										viewBox={`0 0 ${SIGNATURE_FRAME.width} ${SIGNATURE_FRAME.height}`}
										preserveAspectRatio="xMidYMid meet"
										fill="none"
										role="img"
										aria-label={labels.signedAs}
									>
										<title>{labels.signedAs}</title>
										{hasSignature ? (
											<>
												<path
													ref={inkSoftRef}
													d={path}
													stroke="rgb(255 255 255 / 0.14)"
													strokeWidth="5"
													strokeLinecap="round"
													strokeLinejoin="round"
												/>
												<path
													ref={inkRef}
													d={path}
													stroke="rgb(250 250 250 / 0.95)"
													strokeWidth="1.7"
													strokeLinecap="round"
													strokeLinejoin="round"
												/>
											</>
										) : (
											<path
												d={`M ${SIGNATURE_FRAME.pad} ${SIGNATURE_FRAME.height * 0.62} H ${SIGNATURE_FRAME.width - SIGNATURE_FRAME.pad}`}
												stroke="rgb(255 255 255 / 0.12)"
												strokeWidth="1"
												strokeLinecap="round"
												strokeDasharray="2 6"
											/>
										)}
									</svg>
								</div>
							</div>

							<div className="flex items-end justify-between gap-4">
								<div className="min-w-0">
									<p className="mb-1 font-medium text-[0.58rem] text-white/30 uppercase tracking-[0.18em]">
										{labels.nameLabel}
									</p>
									<p className="truncate font-medium text-[1.05rem] text-white tracking-[0.14em] sm:text-[1.15rem]">
										{displayName}
									</p>
								</div>
								<div className="shrink-0 text-right">
									<p className="mb-1 font-medium text-[0.58rem] text-white/30 uppercase tracking-[0.18em]">
										{labels.expiryLabel}
									</p>
									<p className="font-mono text-sm text-white/70 tracking-wider">
										{displayExpiry}
									</p>
								</div>
							</div>

							<p className="font-mono text-[0.7rem] text-white/35 tracking-[0.28em]">
								•••• •••• •••• {displayLast4}
							</p>
						</div>
					</div>
				</motion.div>
			</div>

			{/* Editor — Huertas-style field grid below the preview */}
			<form
				className="grid w-full max-w-md grid-cols-2 gap-x-5 gap-y-5"
				onSubmit={(event) => event.preventDefault()}
			>
				<Field
					id={nameId}
					label={labels.nameLabel}
					value={name}
					onChange={setName}
					placeholder={labels.namePlaceholder}
					maxLength={MAX_NAME}
					autoCapitalize="words"
				/>
				<Field
					id={networkId}
					label={labels.networkLabel}
					value={network}
					onChange={setNetwork}
					placeholder={labels.networkPlaceholder}
					maxLength={MAX_NETWORK}
				/>
				<Field
					id={expiryId}
					label={labels.expiryLabel}
					value={expiry}
					onChange={(value) => setExpiry(formatExpiry(value))}
					placeholder={labels.expiryPlaceholder}
					maxLength={MAX_EXPIRY}
					inputMode="numeric"
				/>
				<Field
					id={last4Id}
					label={labels.last4Label}
					value={last4}
					onChange={(value) => setLast4(value.replace(/\D/g, "").slice(0, 4))}
					placeholder={labels.last4Placeholder}
					maxLength={MAX_LAST4}
					inputMode="numeric"
				/>
			</form>

			<p className="w-full max-w-md text-[0.7rem] text-text-faint tracking-wide">
				{labels.hint}
			</p>
		</div>
	);
}
