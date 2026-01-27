let intersectionObserver: IntersectionObserver;

function ensureIntersectionObserver() {
	if (intersectionObserver) return;

	intersectionObserver = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
                // TRUCO DE SVELTE 5:
                // Recuperamos la función que guardamos en el elemento y la ejecutamos.
                const onEnter = (entry.target as any).__onEnter;
                if (onEnter) onEnter();
                
				intersectionObserver.unobserve(entry.target);
			}
		});
	});
}

// Ahora la acción acepta un segundo parámetro: el callback (la función a ejecutar)
export function viewport(node: HTMLElement, callback: () => void) {
	ensureIntersectionObserver();
	
    // Guardamos la función en el propio nodo para que el observer la encuentre
    (node as any).__onEnter = callback;
    
	intersectionObserver.observe(node);

	return {
		destroy() {
			intersectionObserver.unobserve(node);
		}
	};
}