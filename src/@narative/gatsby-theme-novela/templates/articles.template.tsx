import React, { useEffect } from "react";
import styled from "@emotion/styled";
import { graphql, useStaticQuery, Link } from "gatsby";

import { Template } from "@narative/gatsby-theme-novela/src/types";

import Layout from "@narative/gatsby-theme-novela/src/components/Layout";
import SEO from "@narative/gatsby-theme-novela/src/components/SEO";
import Anchor from '@narative/gatsby-theme-novela/src/components/Anchor';
import Section from "@narative/gatsby-theme-novela/src/components/Section";
import Paginator from "@narative/gatsby-theme-novela/src/components/Navigation/Navigation.Paginator";

import mediaqueries from "@narative/gatsby-theme-novela/src/styles/media";

import ArticlesList from "@narative/gatsby-theme-novela/src/sections/articles/Articles.List";

const siteQuery = graphql`
  {
    allSite {
      edges {
        node {
          siteMetadata {
            social {
              url
              name
            }
          }
        }
      }
    }
  }
`;

const HomePage: Template = ({ location, pageContext }) => {
  const results = useStaticQuery(siteQuery);
  const { social } = results.allSite.edges[0].node.siteMetadata;
  const articles = pageContext.group;
  const authors = pageContext.additionalContext.authors;

  useEffect(() => {
    // Default articles layout to list
    localStorage.setItem('gridLayout', 'rows');
    // Default theme to dark mode
    localStorage.setItem('theme-ui-color-mode', 'dark');
  }, []);
  

  return (
    <Layout>
      <SEO pathname={location.pathname} />
      <HomePageContainer>
        <HomePageContentContainer>
          <HeroHeading>
            Hello! I'm Alex. 👋🏾 I'm on a mission to help you express your
            creative genius & live a more prosperous life. 🚀
          </HeroHeading>
          <HeroP>
            <Anchor href={social[0].url} target="_blank">
              <b>I make videos about first principles</b>
            </Anchor>
            , tech, money & other topics. I also love to design & build products
            with code in my spare time; keep updated my latest projects{" "}
            <Anchor href={social[1].url} target="_blank">
              <b>here</b>
            </Anchor>
            .
            <br />
            <br />
            If you want to level up your business or life{" "}
            <Link to="/book">
              <Anchor>
                <b>book a 1:1 session</b>
              </Anchor>{" "}
            </Link>
            with me or{" "}
            <Anchor href="mailto:hello@alexentrepreneur.com?subject=Alex Entrepreneur Speaking Engagement Enquiry">
              <b>invite me to speak at your event</b>
            </Anchor>
            . I look forward to meeting you!
          </HeroP>
          <HeroEmailSpan>
            <HeroEmail href="mailto:hello@alexentrepreneur.com">
              hello@alexentrepreneur.com
            </HeroEmail>
          </HeroEmailSpan>
        </HomePageContentContainer>
      </HomePageContainer>
      {/* <Section narrow>
        <ArticlesList articles={articles} />
        <ArticlesPaginator show={pageContext.pageCount > 1}>
          <Paginator {...pageContext} />
        </ArticlesPaginator>
      </Section> */}
    </Layout>
  );
};

const ArticlesPaginator = styled.div<{ show: boolean }>`
  ${p => p.show && `margin-top: 95px;`}
`;

const HomePageContainer = styled.div`
  min-height: 95vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HomePageContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 200px 0 0 0;
  /* max-width: 1140px; */
  max-width: 860px;
  padding: 0 40px;

  ${mediaqueries.desktop`
    margin: 25% 0 0 0;
  `}

  ${mediaqueries.phablet`
    margin: 40% 0 0 0;
  `}
`;

const HeroHeading = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 42px;
  line-height: 1.15;
  margin-bottom: 40px;
  z-index: 1;
  color: ${p => p.theme.colors.primary};

  a {
    color: ${p => p.theme.colors.accent};
  }

  ${mediaqueries.desktop`
    font-size: 34px
  `}

  ${mediaqueries.phablet`
    font-size: 24px;
  `}
`;

const HeroP = styled.p`
  font-size: 18px;
  margin-bottom: 50px;
  color: ${p => p.theme.colors.primary};
  z-index: 1;

  ${mediaqueries.phablet`
    font-size: 16px;
  `}
`;

const HeroEmailSpan = styled.span`
  z-index: 1;
  &::before {
    content: '✉️';
    margin-right: 8px;
    opacity: 0.8;
  }
`;

const HeroEmail = styled(Anchor)`
  font-size: 18px;
  font-weight: normal;
  text-decoration: underline;
  color: ${p => p.theme.colors.primary};
  opacity: 0.65;
  ${mediaqueries.phablet`
    font-size: 16px;
  `}
`;

export default HomePage;
