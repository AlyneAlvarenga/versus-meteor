import React from 'react';
import {Items} from '../api/items';

const Item = (props) => {

  handleClick = (event) => {
    // console.log(props.items.find(item => {

    // }));
    console.log(event.target);

    console.log(event.target.innerText);

    // Items.update(props.item._id, {
    //   $set: {count: count + 1},
    // });
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