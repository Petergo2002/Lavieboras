import { MetadataRoute } from 'next';

/**
 * Programmatic robots.txt generation.
 * This replaces the static public/robots.txt file for better
 * consistency with the rest of the Next.js metadata API.
 */
export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
            },
        ],
        sitemap: 'https://lavieboras.se/sitemap.xml',
    };
}
