const repo = 'Portfolio'

const nextConfig = {
    output: 'export',
    basePath: `/${repo}`,
    assetPrefix: `/${repo}/`,
    images: {
        unoptimized: true,
    },
}

export default nextConfig