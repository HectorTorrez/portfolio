import { Check, Copy } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { focusRing } from "./focus-ring";

type CopyEmailButtonProps = {
	email: string;
};

export function CopyEmailButton({ email }: CopyEmailButtonProps) {
	const [copied, setCopied] = useState(false);
	const resetTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

	useEffect(() => {
		return () => {
			if (resetTimeoutRef.current) {
				clearTimeout(resetTimeoutRef.current);
			}
		};
	}, []);

	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(email);
			setCopied(true);

			if (resetTimeoutRef.current) {
				clearTimeout(resetTimeoutRef.current);
			}

			resetTimeoutRef.current = setTimeout(() => {
				setCopied(false);
			}, 2000);
		} catch {
			setCopied(false);
		}
	};

	return (
		<button
			type="button"
			onClick={handleCopy}
			aria-label={copied ? "Email copied to clipboard" : `Copy email ${email}`}
			className={`inline-flex cursor-pointer items-center justify-center gap-1.5 rounded-lg bg-accent-highlight px-3.5 py-2 font-semibold text-sm text-surface-base transition-colors hover:opacity-90 ${focusRing} ring-offset-surface-overlay`}
		>
			{copied ? (
				<>
					<Check aria-hidden className="size-4" />
					Copied!
				</>
			) : (
				<>
					<Copy aria-hidden className="size-4" />
					Copy email
				</>
			)}
			<span aria-live="polite" className="sr-only">
				{copied ? "Email copied to clipboard" : ""}
			</span>
		</button>
	);
}
