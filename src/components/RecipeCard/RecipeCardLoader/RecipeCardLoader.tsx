import React from 'react'
import { Grid, Placeholder } from 'semantic-ui-react'

const RecipeCardLoader: React.FC = () =>
  <Grid centered stackable columns={2}>

    <Grid.Column>
      <Placeholder>
        <Placeholder.Header>
          <Placeholder.Line length="full" />
        </Placeholder.Header>
      </Placeholder>
    </Grid.Column>

    <Grid.Row>

      <Grid.Column width="4">
        <Placeholder>
          <Placeholder.Image square />
        </Placeholder>
      </Grid.Column>

      <Grid.Column width="12">
        <Placeholder>
          <Placeholder.Header>
            <Placeholder.Line />
          </Placeholder.Header>
          <Placeholder.Paragraph>
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
          </Placeholder.Paragraph>
          <Placeholder.Header>
            <Placeholder.Line />
          </Placeholder.Header>
          <Placeholder.Paragraph>
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
          </Placeholder.Paragraph>
        </Placeholder>
      </Grid.Column>

    </Grid.Row>

  </Grid>

export default RecipeCardLoader
