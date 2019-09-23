import React, { Fragment } from 'react'
import { Icon } from 'semantic-ui-react'

import './RecipeDetail.css'

interface Props {
  servings: number
  readyInMinutes: number
  sourceName: string
  sourceUrl: string
}

const RecipeDetail: React.FC<Props> = (props) => {
  return (
    <Fragment>
      <span className="detail">
        <Icon name="spoon" title="Servings" /> {props.servings}
      </span>
      <span className="detail">
        <Icon name="clock outline" title="Preparation time" /> {props.readyInMinutes}m
      </span>
      <span className="detail">
        <Icon name="location arrow" title="Source" /> <a href={props.sourceUrl} target="_blank" rel="noopener noreferrer">{props.sourceName}</a>
      </span>
    </Fragment>
  )
}

export default RecipeDetail
