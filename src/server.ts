import handler from "@tanstack/react-start/server-entry";

import { portfolioSiteBase } from "#/content/shared";

const canonicalHost = new URL(portfolioSiteBase.url).hostname;

function shouldRedirectToCanonical(hostname: string): boolean {
	return (
		hostname === `www.${canonicalHost}` || hostname.endsWith(".workers.dev")
	);
}

export default {
	fetch(request: Request, ...rest: unknown[]) {
		const url = new URL(request.url);

		if (shouldRedirectToCanonical(url.hostname)) {
			const target = new URL(
				`${url.pathname}${url.search}`,
				portfolioSiteBase.url,
			);
			return Response.redirect(target.href, 301);
		}

		return (handler.fetch as (...args: unknown[]) => Promise<Response>)(
			request,
			...rest,
		);
	},
};
