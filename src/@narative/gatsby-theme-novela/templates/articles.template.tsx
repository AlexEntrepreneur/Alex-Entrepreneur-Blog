import React, { useEffect } from "react";
import styled from "@emotion/styled";
import { graphql, useStaticQuery } from "gatsby";
import { Global } from "@emotion/core";

import { globalStyles } from "@narative/gatsby-theme-novela/src/styles/global";
import mediaqueries from "@narative/gatsby-theme-novela/src/styles/media";
import SEO from "@narative/gatsby-theme-novela/src/components/SEO";
import Paginator from "@narative/gatsby-theme-novela/src/components/Navigation/Navigation.Paginator";
import Section from "@narative/gatsby-theme-novela/src/components/Section";
import ArticlesContextProvider from "@narative/gatsby-theme-novela/src/sections/articles/Articles.List.Context";

import { Template } from "@narative/gatsby-theme-novela/src/types";
import ArticlesList from "@narative/gatsby-theme-novela/src/sections/articles/Articles.List";
import NavigationHeader from "@narative/gatsby-theme-novela/src/components/Navigation/Navigation.Header";
import NavigationFooter from "@narative/gatsby-theme-novela/src/components/Navigation/Navigation.Footer";
import SocialLinks from "@narative/gatsby-theme-novela/src/components/SocialLinks";

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
    <ArticlesContextProvider>
      <Container>
        <Global styles={globalStyles} />
        <SEO pathname={location.pathname} />
        <HomePageContainer>
          <NavigationHeader />
          <HomePageContentContainer>
            <HeroHeading>
              Hello! I'm Alex. 👋🏾 I'm on a mission to help you express your
              creative genius & live a more prosperous life. 🚀
            </HeroHeading>
            <HeroP>
              <A href={social[0].url} target="_blank">
                I make videos about first principles
              </A>
              , tech, money & other topics. I also love to design & build
              products with code in my spare time; keep updated my latest
              projects{" "}
              <A href={social[1].url} target="_blank">
                here
              </A>
              .
              <br />
              <br />
              If you want to level up your business or life{" "}
              <A href="mailto:hello@alexentrepreneur.com?subject=Re:%201:1%20Mentorship%20Booking">
                book a 1:1 session
              </A>{" "}
              with me or{" "}
              <A href="mailto:hello@alexentrepreneur.com?subject=Re:%20Speaking Engagement">
                invite me to speak at your event
              </A>
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
        <NavigationFooter />
      </Container>
    </ArticlesContextProvider>
  );
};

const Container = styled.div`
  position: relative;
  background: ${p => p.theme.colors.background};
  transition: ${p => p.theme.colorModeTransition};
  min-height: 100vh;
`;

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

const ButtonsContainer = styled.div`
  display: flex;

  button:nth-of-type(1) {
    margin-right: 30px;

    ${mediaqueries.phablet`
      margin-right: unset;
      margin-bottom: 30px;
    `}
  }

  ${mediaqueries.phablet`
    flex-direction: column-reverse;
    `}
`;


const Button = styled.button<{ primary? : boolean, large? : boolean }>`
  padding: 0 20px;
  height: ${props => props.large ? '50px' :'40px'};
  min-width: ${props => props.large ? '200px' :'150px'};
  font-size: ${props => props.large ? '18px' :'inherit'};
  font-weight: 500;
  text-decoration-color: black;
  border: 2px solid  ${props => props.theme.colors.primary};
  background: ${props => props.primary ? props.theme.colors.primary: 'unset'};
  color: ${props => props.primary ? props.theme.colors.secondary : props.theme.colors.primary};

  &:active {
    transform: scale(.98);
    transition: transform 100ms ease-in-out;
  }
`;

const HeroHeading = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 42px;
  line-height: 1.15;
  margin-bottom: 40px;
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

const A = styled.a`
  color: ${p => p.theme.colors.accent};
  font-weight: bold;
  text-decoration: underline;
`;

const HeroEmailSpan = styled.span`
  z-index: 1;
  &::before {
    content: '✉️';
    margin-right: 8px;
    opacity: 0.8;
  }
`;

const HeroEmail = styled(A)`
  font-size: 18px;
  font-weight: normal;
  color: ${p => p.theme.colors.primary};
  opacity: 0.65;
  ${mediaqueries.phablet`
    font-size: 16px;
  `}
`;

export default HomePage;
