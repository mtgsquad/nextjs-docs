export default {
  repository: 'https://github.com/mtgsquad/nextjs-docs',
  titleSuffix: ' – mCloud',
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline">mCloud</span>
      <span className="text-gray-600 font-normal hidden md:inline">
        The Non-profit Which Cares Abuot Your Online Presence
      </span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png"/>
      <link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png"/>
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditOnGitHubLink: true,
  footerText: <>Copyright {new Date().getFullYear()} © mCloud, Docs Made With Nextra, Hosted On Vercel, Licensed Under MIT.</>
}
