import { json } from '@sveltejs/kit';
import { PRIVATE_WHATSAPP_NUMBER } from '$env/static/private';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ request, url }) => {
    // 1. Obtener de dónde viene la petición (Referer)
    const referer = request.headers.get('referer');
    
    // 2. Obtener el dominio actual donde está corriendo este código
    // 'url.origin' te dará 'https://test.aura-beauty.pages.dev' en test
    // y 'https://aurabeauty.com' en producción. ¡Magia!
    const currentOrigin = url.origin;

    // 3. Validación Dinámica
    // Permitimos si es Localhost O si el referer empieza con el dominio actual
    const isLocal = url.hostname === 'localhost' || url.hostname === '127.0.0.1';
    
    // Verificamos: ¿El referer contiene mi propio dominio actual?
    const isValidOrigin = referer && referer.startsWith(currentOrigin);

    if (!isLocal && !isValidOrigin) {
        // Opcional: Log para depurar en Cloudflare si algo falla
        console.error(`Bloqueado. Referer: ${referer} vs Origin: ${currentOrigin}`);
        return json({ error: 'Unauthorized' }, { status: 403 });
    }

    if (!PRIVATE_WHATSAPP_NUMBER) {
        return json({ error: 'Config error' }, { status: 500 });
    }

    return json({ 
        phone: PRIVATE_WHATSAPP_NUMBER 
    });
};