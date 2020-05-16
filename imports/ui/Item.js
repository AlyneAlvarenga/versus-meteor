import React from 'react';
import { Meteor } from 'meteor/meteor';

const Item = (props) => {

  handleClick = (event) => {
    if (props.item1 === event.target.innerText) {
      Meteor.call('updateCounterItem1', props);

    } else if (props.item2 === event.target.innerText) {
      Meteor.call('updateCounterItem2', props);
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