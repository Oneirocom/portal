import { PortalLayout, MainLayout } from '@magickml/portal-layout'
import Head from 'next/head'
import { CarouselHero } from '@magickml/portal-ui'

export function Root() {
  const metaTitle = 'Home | MagickML'
  const metaDescription = 'Cutting-edge tools for AI creators'
  const metaUrl = 'https://magickml.com'
  const metaImage = `${process.env.NEXT_PUBLIC_APP_URL}/images/banner.png`

  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={metaUrl} />
        <meta property="og:site_name" content="MagickML" />
        <meta property="og:image" content={metaImage} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
      </Head>
      <div className="grid items-center grid-cols-1">
        <CarouselHero />
      </div>
    </>
  )
}

Root.getLayout = function getLayout(page: any) {
  return (
    <PortalLayout>
      <MainLayout classNames="">{page}</MainLayout>
    </PortalLayout>
  )
}
