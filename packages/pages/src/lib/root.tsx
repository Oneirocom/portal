import { MagickLayout, MainLayout } from "@magickml/portal-layout";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import { CarouselHero } from "@magickml/portal-ui";

export function Root({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) {

  const metaTitle = "Home | MagickML";
  const metaDescription = "Cutting-edge tools for AI creators";
  const metaUrl = "https://magickml.com";
  const metaImage = `${process.env.NEXT_PUBLIC_APP_URL}/images/banner.png`;

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
  );
}

Root.getLayout = function getLayout(page: any) {
  return (
    <MagickLayout isPublic={true}>
      <MainLayout classNames="">{page}</MainLayout>
    </MagickLayout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  return {
    props: {},
    revalidate: 60 * 10,
  };
};
