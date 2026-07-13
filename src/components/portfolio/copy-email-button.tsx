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
			aria-label={
				copied ? ui.copyEmail.copiedAria : ui.copyEmail.copyAria(email)
			}
			className={`apple-pill inline-flex cursor-pointer items-center justify-center gap-1.5 bg-accent-highlight px-5 py-2.5 font-normal text-sm text-white transition-all hover:brightness-110 ${focusRing}`}
		>
			{copied ? (
				<>
					<Check aria-hidden className="size-4" />
					{ui.copyEmail.copied}
				</>
			) : (
				<>
					<Copy aria-hidden className="size-4" />
					{ui.copyEmail.label}
				</>
			)}
			<span aria-live="polite" className="sr-only">
				{copied ? ui.copyEmail.copiedAria : ""}
			</span>
		</button>
	);
}
