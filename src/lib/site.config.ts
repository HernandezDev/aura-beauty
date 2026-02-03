// Importamos la imagen desde lib para tener hash y caché (Vite)
import ogImageSrc from '$lib/assets/images/social-preview.jpg?url';

export interface SiteConfig {
	name: string;
	url: string; // URL de producción (https://...)
	description: string;
	author: string; // El dueño del negocio (Cliente)
	agency: string; // Tu agencia (para web_author)
	keywords: string;
	ogImage: string;
	themeColor: string;
	locale: string; // Formato: idioma_PAIS (ej: es_ES, en_US, pt_BR)
	lang: string;      // Para el tag <html lang="es">
}

export const site: SiteConfig = {
	name: 'Aura Beauty',
	url: 'https://aura-beauty.pages.dev',
	description: 'Reserva tu turno en el mejor salón de belleza. Expertos en estilo.',
	author: 'Aura Beauty', // El cliente es el autor del contenido
	agency: 'HernandezDev', // Tú eres el autor del código
	keywords: 'belleza, salon, turnos, peluquería, estética',
	ogImage: ogImageSrc,
	themeColor: '#c9a24d',
	locale: 'es_AR', // Formato: idioma_PAIS (ej: es_ES, en_US, pt_BR)
    lang: 'es',      // Para el tag <html lang="es">
};