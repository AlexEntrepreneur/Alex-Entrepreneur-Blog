import React from 'react';
import styled from '@emotion/styled';

import Layout from '@narative/gatsby-theme-novela/src/components/Layout';
import Section from '@narative/gatsby-theme-novela/src/components/Section';
import SEO from '@narative/gatsby-theme-novela/src/components/SEO';
import Headings from '@narative/gatsby-theme-novela/src/components/Headings';
import Paragraph from '@narative/gatsby-theme-novela/src/components/Paragraph';
import { Button } from '../@narative/gatsby-theme-novela/components/Buttons';
import MDXRenderer from '@narative/gatsby-theme-novela/src/components/MDX';
import AcuityScheduler from '../@narative/gatsby-theme-novela/components/Acuity';

export default function BookMentorship() {

  return (
    <Layout>
      <SEO />
      <TopSection>
        <Headings.h1 style={{ marginBottom: '10px' }}>1:1 Mentorship with Alex</Headings.h1>
        <Paragraph style={{ zIndex: 1, marginBottom: '30px' }}>
          I will guide you through using first principles thinking with a bespoke brainstorming experience.
          Gain clarity on your goals, create a powerful action plan, and have someone to talk to.
        </Paragraph>
        <a href="https://app.acuityscheduling.com/schedule.php?owner=18993163" target="_blank">
          <Button primary>
            Book Now
          </Button>
        </a>
      </TopSection>
      <InfoSection>
        <Headings.h3>Book a Session</Headings.h3>
      </InfoSection>
      <AcuityScheduler />
    </Layout>
  );
}

const TopSection = styled(Section)`
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 100px;
`;

const InfoSection = styled(Section)`
  text-align: center;
  margin-bottom: 10px;
`;
