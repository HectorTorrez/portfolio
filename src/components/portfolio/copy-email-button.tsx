import { Check, Copy } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { focusRing } from "./focus-ring";
import { useLocaleContent } from "./locale-context";

type CopyEmailButtonProps = {
	email: string;
};

export function CopyEmailButton({ email }: CopyEmailButtonProps) {
	const { ui } = useLocaleContent();
	const [copied, setCopied] = useState(false);
	const [failed, setFailed] = useState(false);
	const [swapKey, setSwapKey] = useState(0);
	const resetTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

	useEffect(() => {
		return () => {
			if (resetTimeoutRef.current) {
				clearTimeout(resetTimeoutRef.current);
			}
		};
	}, []);

	const scheduleReset = () => {
		if (resetTimeoutRef.current) {
			clearTimeout(resetTimeoutRef.current);
		}

		resetTimeoutRef.current = setTimeout(() => {
			setCopied(false);
			setFailed(false);
			setSwapKey((key) => key + 1);
		}, 2000);
	};

	const openMailtoFallback = () => {
		window.location.href = `mailto:${email}`;
	};

	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(email);
			setFailed(false);
			setCopied(true);
			setSwapKey((key) => key + 1);
			scheduleReset();
		} catch {
			setCopied(false);
			setFailed(true);
			setSwapKey((key) => key + 1);
			openMailtoFallback();
			scheduleReset();
		}
	};

	const liveMessage = copied
		? ui.copyEmail.copiedAria
		: failed
			? ui.copyEmail.failedAria
			: "";

	return (
		<button
			type="button"
			onClick={handleCopy}
			aria-label={
				copied ? ui.copyEmail.copiedAria : ui.copyEmail.copyAria(email)
			}
			className={`pressable inline-flex min-h-11 cursor-pointer items-center justify-center gap-1.5 text-sm text-text-muted hover:text-text-primary hover:opacity-100 ${focusRing}`}
		>
			<span
				key={swapKey}
				className="icon-swap-in inline-flex items-center gap-1.5 leading-none"
			>
				{copied ? (
					<>
						<Check aria-hidden className="size-3.5" />
						{ui.copyEmail.copied}
					</>
				) : (
					<>
						<Copy aria-hidden className="size-3.5" />
						{ui.copyEmail.label}
					</>
				)}
			</span>
			<span aria-live="polite" className="sr-only">
				{liveMessage}
			</span>
		</button>
	);
}
