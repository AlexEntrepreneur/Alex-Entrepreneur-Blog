import React from 'react';
import { Link } from 'gatsby';

import Layout from '@narative/gatsby-theme-novela/src/components/Layout';
import Section from '@narative/gatsby-theme-novela/src/components/Section';
import SEO from '@narative/gatsby-theme-novela/src/components/SEO';
import Headings from '@narative/gatsby-theme-novela/src/components/Headings';
import Anchor from '@narative/gatsby-theme-novela/src/components/Anchor';

function NotFoundPage() {
  return (
    <Layout>
      <SEO />
      <Section>
        <div style={{ marginTop: '100px', textAlign: 'center' }}>
          <Headings.h1 style={{ marginBottom: '50px'}}>404: Page Not Found</Headings.h1>
          <Link to="/"><Anchor><b>Return Home</b></Anchor></Link>
        </div>
      </Section>
    </Layout>
  );
}

export default NotFoundPage;
