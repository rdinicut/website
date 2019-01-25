import React from "react";
import { graphql } from "gatsby";
import { Heading } from "grommet";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Container from "../components/Container";
import Grid from "../components/Grid";
import Column, { Spacer } from "../components/Column";
import Animation from "../components/Animation";
import VIP from "../components/VIP";

import { RichTextRenderer } from "../helpers";

import block1Animation from "../lottie/About.json";
import aboutBig from "../images/about_big.svg";

const AboutPage = ({ data }) => {
  const page = data.allContentfulPageAbout.edges[0].node;

  return (
    <Layout>
      <SEO {...page.seo} />
      <Container>
        {/* Block 1 */}
        <Grid id="mission">
          <Column span={{ medium: 6, large: 7 }}>
            <RichTextRenderer content={page.block1.contentAST} />
          </Column>
          <Spacer />
          <Column span={{ medium: 6, large: 4 }}>
            <Animation file={block1Animation} loop={false} />
          </Column>
        </Grid>

        {/* Block 2 */}
        <Grid justify="end">
          <Spacer width={4} />
          <Column span={{ medium: 12, large: 8 }}>
            <RichTextRenderer content={page.block2.contentAST} />
          </Column>
        </Grid>

        {/* Block 3 */}
        <Grid>
          <Column span={{ medium: 12, large: 4 }}>
            <RichTextRenderer content={page.block3.contentAST} />
          </Column>
        </Grid>

        {/* Block 4 - Team */}
        <Grid id="team">
          <Column justifySelf="stretch">
            <Heading level="2">Our team</Heading>
          </Column>
          {page.block4Team.map((member, index) => {
            return (
              <Column
                key={index}
                justifySelf="center"
                span={{ medium: 6, large: 3 }}
                style={{ marginBottom: "2rem" }}
              >
                <VIP {...member} />
              </Column>
            );
          })}
        </Grid>

        <Grid>
          <Column>
            <img alt="" src={aboutBig} />
          </Column>
        </Grid>

        {/* Block 5 - Advisors */}
        <Grid>
          <Column justifySelf="stretch">
            <Heading level="2">Advisory Board</Heading>
          </Column>
          {page.block5Advisors.map((advisor, index) => {
            return (
              <Column
                key={index}
                justifySelf="center"
                span={{ medium: 6, large: 3 }}
                style={{ marginBottom: "2rem" }}
              >
                <VIP {...advisor} />
              </Column>
            );
          })}
        </Grid>

        {/* Block 6 - Investors */}

        {/* Block 7 */}
        <Grid justify="center">
          <Column textAlign="center">
            <RichTextRenderer content={page.block7.contentAST} />
          </Column>
        </Grid>
      </Container>
    </Layout>
  );
};

export const AboutPageQuery = graphql`
  query {
    allContentfulPageAbout {
      edges {
        node {
          seo {
            title
            description
          }
          block1 {
            contentAST
          }
          block2 {
            contentAST
          }
          block3 {
            contentAST
          }
          block4Team {
            headshot {
              fixed(width: 128, height: 128, quality: 80) {
                ...GatsbyContentfulFixed_withWebp
              }
            }
            name
            title
            socialMediaTwitter
            socialMediaLinkedIn
            socialMediaGitHub
            socialMediaMedium
          }
          block5Advisors {
            headshot {
              fixed(width: 128, height: 128, quality: 80) {
                ...GatsbyContentfulFixed_withWebp
              }
            }
            name
            title
            socialMediaTwitter
            socialMediaLinkedIn
            socialMediaGitHub
            socialMediaMedium
          }
          block7 {
            contentAST
          }
        }
      }
    }
  }
`;

export default AboutPage;
