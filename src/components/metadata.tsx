import Head from "next/head";

type props = {
    title: string;
    description: string;
}   

const Metadata = ({ title, description }: props) => {
  return (
    <Head>
      <title>{ title ? title : "SEO-Friendly with Next.js" }</title>
      <meta name="description" content={ description ? description : "SEO-Friendly with Next.js" } />
      <meta name="author" content="Gerardo Valencia" />
      <meta property="og:title" content={title ? title : "SEO-Friendly with Next.js"} />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={description ? description : "SEO-Friendly with Next.js"} />
      <meta property="image" content="https://img.lovepik.com/photo/40007/3158.jpg_wh300.jpg"></meta>
      <meta name="twitter:title" content={title ? title : "SEO-Friendly with Next.js"} />
      <meta name="twitter:description" content={description ? description : "SEO-Friendly with Next.js"} />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
  );
}

export default Metadata;