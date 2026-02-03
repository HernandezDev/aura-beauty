import type { Handle } from '@sveltejs/kit';
import { site } from '$lib/site.config'; // 👈 Importamos tu config

export const handle: Handle = async ({ event, resolve }) => {
	return resolve(event, {
		transformPageChunk: ({ html }) => html.replace('%lang%', site.lang)
	});
};