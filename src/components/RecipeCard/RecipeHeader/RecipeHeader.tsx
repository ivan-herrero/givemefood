import React, { Fragment } from 'react'
import { Header, Icon } from 'semantic-ui-react'

interface Props {
  title: string
  dairyFree: boolean
  glutenFree: boolean
  vegan: boolean
  vegetarian: boolean
}

const renderSensitivities = (props: Props) =>
  <Fragment>
    {props.vegetarian && <Icon fitted circular name="leaf" color="olive" title="Vegetarian" />}
    {props.vegan && <Icon fitted circular name="tree" color="teal" title="Vegan" />}
    {props.glutenFree && <Icon fitted circular name="sun outline" color="yellow" title="Gluten free" />}
    {props.dairyFree && <Icon fitted circular name="chart pie" color="grey" title="Dairy free" />}
  </Fragment>

const RecipeHeader: React.FC<Props> = (props) => {
  return (
    <Header size="huge">
      <Header.Content>
        {props.title}
      </Header.Content>
      <Header.Subheader>
        {renderSensitivities(props)}
      </Header.Subheader>
    </Header>
  )
}

export default RecipeHeader;
