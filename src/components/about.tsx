import React from 'react';
import Metadata from "./metadata";

const About = () => {
  return (
    <React.Fragment>
      <Metadata
        title="SEO-Friendly: ✨ About page"
        description="SEO-Friendly: About page"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQaRTa4Q3DJoRZ6uOfgtrs0fF4oDhuukygPSsoHCyBcyvaAfhkwp3qycTf6EqTMC8g32I&usqp=CAU"
      />
      <h1 className="title">SEO-Friendly: About page</h1>
      <p className="description">Regards from the About page everyone!</p>
    </React.Fragment>
  )
}

export default About;