import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import Icons from 'unplugin-icons/vite';
import { enhancedImages } from '@sveltejs/enhanced-img';

export default defineConfig({ 
    plugins: [
        enhancedImages(),
        tailwindcss(), 
        sveltekit(), 
        Icons({compiler: 'svelte',autoInstall: true})
    ],server: {
        // para probar con ngrok
        //allowedHosts: true
    }
 });