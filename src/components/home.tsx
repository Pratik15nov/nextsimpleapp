import React from 'react';
import Image from 'next/image';

import example1 from '../../public/example_1.jpeg';

import Metadata from "./metadata";

const Home = () => {
  return (
    <React.Fragment>
      <Image
        src={example1}
        alt="Picture of the author"
      />
      <Metadata
        title="SEO-Friendly: 🏡 Home"
        description="Trying how Next.js manage the SEO."
      />
      <h1>SEO-Friendly with Next.js</h1>
      <p>Regards from the Home page everyone!</p>
    </React.Fragment>
  )
}

export default Home;