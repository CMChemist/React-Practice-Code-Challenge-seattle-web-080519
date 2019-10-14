import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from "../components/Sushi"

const SushiContainer = (props) => {
  console.log(props.currentSushi)
  const displaySushi = (sushiArray) => {
    // sushiArray.map(element => {
    //   return <Sushi sushi={element}/>
    // })
    let sushiCompontents = [];
    for(let i = 0; i < sushiArray.length; i++) {
      sushiCompontents[i] = <Sushi sushi={sushiArray[i]} handleClickSushi={props.handleClickSushi}/>
    }
    return sushiCompontents;
  }

  return (
    <Fragment>
      <div className="belt">
        {
          /* 
             Render Sushi components here!
          */
          displaySushi(props.currentSushi)
        }
        <MoreButton handleButtonClick={props.handleButtonClick}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer