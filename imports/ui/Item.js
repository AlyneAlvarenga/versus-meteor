import React from 'react';
import {Items} from '../api/items';

const Item = (props) => {

  handleClick = (event) => {
    if (props.item1 === event.target.innerText) {
      Items.update(props.id, {
        $inc: {"first.count": 1}
      })

    } else if (props.item2 === event.target.innerText) {
      Items.update(props.id, {
        $inc: { "second.count": 1 }
      })
    }
  }

  return (
    <li>
      <h2>{props.question}</h2>
      <div>
        <button onClick={handleClick}>{props.item1}</button>
        <p>{props.count1}</p>
      </div>
      <div>
        <button onClick={handleClick}>{props.item2}</button>
        <p>{props.count2}</p>
      </div>
    </li>
  )
}

export default Item;