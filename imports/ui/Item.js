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
      <ul className="Item-buttonContainer">
        <li className="Item-button">
          <button onClick={handleClick}>{props.item1}</button>
          <p>{props.count1} votes</p>
        </li>
        <li className="Item-button">
          <button onClick={handleClick}>{props.item2}</button>
          <p>{props.count2} votes</p>
        </li>
      </ul>
    </li>
  )
}

export default Item;