import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    /**
     * Enforce URLs without trailing slashes to prevent duplicate pages.
     * e.g., /tjanster is canonical, /tjanster/ redirects to /tjanster.
     * This fixes Google Search Console "Alternate page with proper canonical tag"
     * and "Page with redirect" issues.
     */
    trailingSlash: false,

    /** Image optimization configuration */
    images: {
        formats: ['image/avif', 'image/webp'],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920],
        imageSizes: [16, 32, 48, 64, 96, 128, 256],
    },
};

export default nextConfig;
