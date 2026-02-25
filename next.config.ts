import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    /**
     * Enforce URLs without trailing slashes to prevent duplicate pages.
     * e.g., /tjanster is canonical, /tjanster/ redirects to /tjanster.
     */
    trailingSlash: false,

    /**
     * Permanent redirect from non-www to www.
     * This ensures Google only ever sees one version of the site (www.lavieboras.se),
     * which is critical for canonical tag consistency and preventing duplicate content issues.
     */
    async redirects() {
        return [
            {
                source: '/:path*',
                has: [{ type: 'host', value: 'lavieboras.se' }],
                destination: 'https://www.lavieboras.se/:path*',
                permanent: true, // 308 — tells Google this is a permanent move
            },
        ];
    },

    /** Image optimization configuration */
    images: {
        formats: ['image/avif', 'image/webp'],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920],
        imageSizes: [16, 32, 48, 64, 96, 128, 256],
    },
};

export default nextConfig;
