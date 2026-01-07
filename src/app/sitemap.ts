import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://weightlosspercent.com'

    // Static Routes
    const routes = [
        '',
        '/learn',
        '/real-stories',
        '/about/medical-board',
        '/contact',
        '/legal/privacy',
        '/legal/terms',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }))

    // Dynamic Routes (Stories) - In a real app, fetch these from DB/CMS
    const stories = [
        'sarah-j-5-percent-transformation',
        'mike-d-reversing-prediabetes',
        'elena-r-postpartum-journey',
        'david-k-sustainable-pace',
        'priya-m-mental-clarity'
    ].map((slug) => ({
        url: `${baseUrl}/real-stories/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }))

    // Dynamic Routes (Articles)
    const articles = [
        'benefits-of-5-percent-weight-loss',
        'real-stories-5-percent-impact',
        'safe-weight-loss-rate'
    ].map((slug) => ({
        url: `${baseUrl}/learn/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    // Dynamic Routes (Percentage Milestones 5-50%)
    const percentagePages = Array.from({ length: 46 }, (_, i) => i + 5).map((p) => ({
        url: `${baseUrl}/learn/lose-${p}-percent`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.6,
    }));

    return [
        ...routes,
        ...stories,
        ...articles,
        ...percentagePages
    ];
}
