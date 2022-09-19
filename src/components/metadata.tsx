import Head from "next/head";

type props = {
    title: string;
    description: string;
    image?: string
}   

const Metadata = ({ title, description, image }: props) => {
  return (
    <Head>
      <meta data-rh="true" name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1,maximum-scale=1"/>
      <title>{ title ? title : "SEO-Friendly with Next.js" }</title>
      <meta name="description" content={ description ? description : "SEO-Friendly with Next.js" } />
      <meta name="author" content="Gerardo Valencia" />
      <meta property="og:title" content={title ? title : "SEO-Friendly with Next.js"} />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={description ? description : "SEO-Friendly with Next.js"} />
      <meta property="og:image" content={image ? image : "https://img.lovepik.com/photo/40007/3158.jpg_wh300.jpg"}/>
      {/* <meta data-rh="true" name="twitter:image:src" content={image ? image : "https://img.lovepik.com/photo/40007/3158.jpg_wh300.jpg"}/> */}
      <meta data-rh="true" name="twitter:card" content="summary_large_image"/>
      {/* <meta property="image" content={image ? image : "https://img.lovepik.com/photo/40007/3158.jpg_wh300.jpg"}/> */}
      <meta name="twitter:title" content={title ? title : "SEO-Friendly with Next.js"} />
      <meta name="twitter:description" content={description ? description : "SEO-Friendly with Next.js"} />
      </Head>
  );
}

export default Metadata;