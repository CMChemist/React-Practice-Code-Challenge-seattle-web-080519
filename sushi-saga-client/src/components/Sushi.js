import React from 'react'

const Sushi = (props) => {
  console.log(props.sushi)
  return (
    <div className="sushi">
      <div className="plate" 
           onClick={() => props.handleClickSushi(props.sushi.id)}>
        {
          /* Tell me if this sushi has been eaten! */ 
          props.sushi.img_url ?
              <img src={props.sushi.img_url} alt='' width="100%" />
            :
              null
        }
      </div>
      <h4 className="sushi-details">
        {props.sushi.name} - ${props.sushi.price}
      </h4>
    </div>
  )
}

export default Sushi