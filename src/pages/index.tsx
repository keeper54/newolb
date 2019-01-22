import * as React from 'react'
import Page from '../components/layout/Page'
import Container from '../components/layout/Container'
import styled from '../utils/styled'

export default () => (
  <Page>
    <Container>
      <PageContent>
        <h1>Welcome!</h1>
        <p>
          Welcome to the Redux 4 + TypeScript example, brought to you by Adam from Magenic! This example site shows you the ideal
          project structure, recommended libraries, as well as design pattern on writing type-safe
          React + Redux app with TypeScript.
        </p>
        <p>This app displays information like professional teams, heroes, as well as top players by
          hero. This will also demonstrate how to structure your stores for each feature/module in a
          Redux-enabled app.
        </p>
      </PageContent>
    </Container>
  </Page>
)

const PageContent = styled('article')`
  max-width: ${props => props.theme.widths.md};
  margin: 0 auto;
  line-height: 1.6;

  a {
    color: ${props => props.theme.colors.brand};
  }

  h1,
  h2,
  h3,
  h4 {
    margin-bottom: 0.5rem;
    font-family: ${props => props.theme.fonts.headings};
    line-height: 1.25;
  }
`
