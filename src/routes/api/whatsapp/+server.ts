import { json } from '@sveltejs/kit';
// 1. IMPORTAMOS EL OBJETO 'env' (No la variable directa)
import { env } from '$env/dynamic/private'; 
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ request, url }) => {
    const referer = request.headers.get('referer');
    const currentOrigin = url.origin;
    
    // Validación de seguridad (Localhost o Mismo Dominio)
    const isLocal = url.hostname === 'localhost' || url.hostname === '127.0.0.1';
    const isValidOrigin = referer && referer.startsWith(currentOrigin);

    if (!isLocal && !isValidOrigin) {
        return json({ error: 'Unauthorized' }, { status: 403 });
    }

    // 2. USAMOS EL OBJETO 'env' PARA LEER LA VARIABLE
    const phoneNumber = env.PRIVATE_WHATSAPP_NUMBER;

    if (!phoneNumber) {
        console.error("Error: Variable PRIVATE_WHATSAPP_NUMBER no encontrada en 'env'.");
        return json({ error: 'Config error' }, { status: 500 });
    }

    return json({ 
        phone: phoneNumber 
    });
};