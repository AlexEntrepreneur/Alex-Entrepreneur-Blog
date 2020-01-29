import React, { useEffect } from "react";
import styled from "@emotion/styled";
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

const HomePage: Template = ({ location, pageContext }) => {
  const articles = pageContext.group;
  const authors = pageContext.additionalContext.authors;

  useEffect(() => {
    // Default articles layout to list
    localStorage.setItem('gridLayout', 'rows');
  }, []);
  

  return (
    <ArticlesContextProvider>
      <Container>
        <Global styles={globalStyles} />
        <HomePageContainer>
          <NavigationHeader />
          <HomePageContentContainer>
            <HeroHeading>First principles, business & other stuff.</HeroHeading>
            <ButtonsContainer>
              <a href={`${authors[0].social[1].url}`} target="_blank">
                <Button large>About Me</Button>
              </a>
              <a href={`${authors[0].social[1].url}`} target="_blank">
                <Button primary large>
                  Work With Me
                </Button>
              </a>
            </ButtonsContainer>
          </HomePageContentContainer>
        </HomePageContainer>
        <SEO pathname={location.pathname} />
        <Section narrow>
          <ArticlesList articles={articles} />
          <ArticlesPaginator show={pageContext.pageCount > 1}>
            <Paginator {...pageContext} />
          </ArticlesPaginator>
        </Section>
        <NavigationFooter />
      </Container>
    </ArticlesContextProvider>
  );
};

const Container = styled.div`
  position: relative;
  background: ${p => p.theme.colors.background};
  /* transition: ${p => p.theme.colorModeTransition}; */
  min-height: 100vh;
`;

const ArticlesPaginator = styled.div<{ show: boolean }>`
  ${p => p.show && `margin-top: 95px;`}
`;

const HomePageContainer = styled.div`
  height: 95vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HomePageContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  max-width: 1140px;
  padding: 0 40px;
  text-align: center;
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
  font-size: 52px;
  line-height: 1.15;
  margin-bottom: 40px;
  color: ${p => p.theme.colors.primary};

  a {
    color: ${p => p.theme.colors.accent};
  }

  ${mediaqueries.desktop`
    font-size: 38px
  `}

  ${mediaqueries.phablet`
    font-size: 32px;
  `}
`;

export default HomePage;
