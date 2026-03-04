import { MetadataRoute } from 'next'
import { getBlogPosts } from '@/lib/blog-data'

/**
 * Generates the XML sitemap for Google and other search engines.
 * Lists all static pages and dynamic blog posts with their canonical URLs.
 * Uses meaningful lastModified dates instead of `new Date()` to avoid
 * signaling false content changes to search engines.
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://www.lavieboras.se'
    const blogPosts = await getBlogPosts();

    // Static pages with stable lastModified dates
    const staticPages: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: new Date('2026-02-10'),
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: `${baseUrl}/tjanster`,
            lastModified: new Date('2026-02-10'),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/om-oss`,
            lastModified: new Date('2026-02-10'),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/frisor-boras`,
            lastModified: new Date('2026-03-04'),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/blogg`,
            lastModified: new Date('2026-03-04'),
            changeFrequency: 'weekly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/kontakt`,
            lastModified: new Date('2026-02-10'),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
    ]

    // Dynamic blog post pages - use each post's actual date
    const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
        url: `${baseUrl}/blogg/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }))

    return [...staticPages, ...blogPages]
}
